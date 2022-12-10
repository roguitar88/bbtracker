const express = require('express');
const app = express();
const cors = require('cors');
// const User  = require('./models/db');
const User = require('./models/User');
const FoundDevices = require('./models/FoundDevices');
// const User = UserTest.User;
// const { QueryTypes } = require('sequelize');
const hp = require('./helper');
const Browser = require('nodecast-js');

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost', 'http://bbtracker.test:3000', 'http://bbtracker.test', 'https://bbtracker.tk:3000', 'https://bbtracker.tk', 'http://bbtracker.tk', 'http://bbtracker.example:3000', 'http://bbtracker.example'],
    // origin: [baseUrl],
    methods: ['GET', 'POST'],
    credentials: true
}));

// cookie parser middleware
/*
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    key: 'userId',
    secret: 'bbtracker-GXCq5vHKPa4egDQ9',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 1000 * 60 * 60 * 24
    }
}));
*/

// a variable to save a session
// var session;
// console.log(hp.nDate + ' ' + hp.nTime);
// console.log(hp.nDate);

app.get('/', (req, res) => {    
    /*
    // CREATE (MongoDB)
    new User({
        name: 'Jeca',
        surname: 'Tatu',
        age: 45,
        email: 'jeca.tatu@gmail.com',
        country: 'Brazil'
    }).save().then(() => {
        console.log('User inserted successfully');
    }).catch((err) => {
        console.log('Erro: ' + err);
    });
    */

    // User.dropDatabase();

    /*
    User.insertMany([
        {"name": "Haroldo", "email": "haroldo@gmail.com", "password": "123147Poi@"},
        {"name": "Tobias", "email": "tobias@gmail.com", "password": "123147Poi@"}
    ]);
    */
    
    // res.send('Testing backend!');

    /*
    // READ (MongoDB)
    User.find().then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
    res.send('Testing backend!');
    */
});

app.get('/edit/:id', (req, res) => {
    // UPDATE (MongoDB)
    User.findOne({_id: req.params.id}).then((data) => {
        // console.log(data);
        data.email = 'jamileumanoites@gmail.com'; // Updating the email
        res.send('Editing user ID ' + req.params.id); // {data: data}
    }).catch((err) => {
        res.send('Error: this user does not exist. ' + err);
        // req.flash('Error: this user does not exist. ' + err);
        // res.redirect('/');
    });
});

app.get('/delete/:id', (req, res) => {
    // DELETE (MongoDB)
    // .remove() is deprecated. Use deleteOne, deleteMany or bulkWrite
    User.deleteOne({_id: req.params.id}).then((data) => {
        res.send('User ID ' + req.params.id + ' deleted successfully!');
        // res.redirect('/');
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});

/*
app.get('/', (req, res) => {
    User.findAll({
        raw: true,
        where: {
            email: 'rogeriobsoares5@gmail.com'
        }
    }).then((data) => {
        console.log(typeof data);
        if (Object.keys(data).length === 0) {
            console.log('No user found!');
        } else {
            console.log('User found!');
        }
    })
    res.send('Hello, world!');
});
*/

app.post('/user/new', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    let alright = true;
    // let errorType = new Array();

    // MySQL or PostgreSQL
    User.findAll({
        raw: true,
        where: {
            email: email
        }
    })
    // MongoDB
    // User.findOne({email: email})
    .then((data) => {
        if (Object.keys(data).length > 0) {
            // errorType.push(0);
            alright = false;
            console.log('This email already exists. Try to login with it');
            res.send({success: false, msg: 'This email already exists. Try to login with it'});
        }
        
        if (!hp.checkPassword(password)) {
            // errorType.push(1);
            alright = false;
            console.log('Password must have at least 8 characters including lower case, upper case letters, numbers and symbols');
            res.send({success: false, msg: 'Password must have at least 8 characters including lower case, upper case letters, numbers and symbols'});
        }

        if (alright) {
            // bcrypt.hash(password, saltRounds, (err, hash) => {
                // if (err) {
                    // console.log(err);
                    // res.send({success: false, msg: err});
                // } else {
                    /*
                    // MongoDB
                    new User({
                        name: name,
                        email: email,
                        password: password,
                    }).save().then((user) => {
                        console.log('User registered successfully');
                        res.send({success: true, msg: 'User registered successfully', userId: user._id});
                        // res.redirect('/welcome');                    
                    }).catch((err) => {
                        console.log(err);
                        res.send({success: false, msg: err});
                    });
                    */
                    // MySQL or PostgreSQL
                    User.create({
                        full_name: name,
                        email: email,
                        password: password, //hash
                        created_at: hp.nDate
                    }).then((user) => {
                        console.log('User registered successfully');
                        console.log(user);
                        res.send({success: true, msg: 'User registered successfully', userId: user.dataValues.id});
                        // res.redirect('/welcome');
                    }).catch((err) => {
                        console.log(err);
                        res.send({success: false, msg: err});
                    });
                // }  
            // }).catch((err) => {
                // console.log(err);
                // res.send({success: false, msg: err});
            // });
        }
    })
    /*
    .catch((err) => {
        return {'success': false, 'error': err};
    })
    */
});

app.post('/user/data', (req, res) => {
    const userId = req.body.id;

    // MySQL or PostgreSQL
    // User.findAll({
    User.findOne({
        raw: true,
        where: {
            id: userId
        }
    })
    // MongoDB
    // User.findOne({_id: userId})
    .then((data) => {
        res.send({success: true, data: data});
    }).catch((err) => {
        // console.log(err);
        res.send({success: false, data: err});
    });
});

app.post('/user/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // let error = new Array();

    // MySQL or PostgreSQL
    // User.findAll({
    User.findOne({
        raw: true,
        where: {
            email: email
        }
    })
    // MongoDB
    // User.findOne({email: email})
    .then((data) => {
        if (data === null) { //|| Object.keys(data).length == 0
            // error.push(0);
            console.log('Email not found');
            res.send({success: false, msg: 'Email not found'});
        } else {
            // console.log(data);
            // bcrypt.compare(password, data[0].password, (error, result) => {
                // if (!result) {
                // if (password !== data[0].password) {
                if (password !== data.password) {
                    // console.log(password);
                    // console.log(data.password);
                    console.log('Password incorrect');
                    res.send({success: false, msg: 'Password incorrect'});
                } else {
                    console.log('User logged in successfully!');
                    // res.send({success: true, msg: 'User logged in successfully!', userId: data[0].id});
                    // res.send({success: true, msg: 'User logged in successfully!', userId: data._id});
                    res.send({success: true, msg: 'User logged in successfully!', userId: data.id});
                    // res.redirect('/welcome');
                }
            // });
        }
    });
});

app.post('/browse', (req, res) => {
    // let token = require('./token');
    // let token = req.body.token;
    let browser = new Browser();
    browser.onDevice(function (device) {
        device.onError(function (err) {
        // device.on('uncaughtException', function (err) {
            console.log(err);
            res.send({success: false, msg: err});
        });

        // let store = require('store');
        // let xml = device.xml;
        // let name = device.name;

        // data.devices.push({"xml": xml, "name": name, "token": token});
        // store.set('devices_found', {"xml": xml, "name": name});
        /*
        // MySQL or PostgreSQL
        FoundDevices.create({
            device_name: name,
            device_xml: xml,
            browse_token: token
        }).then((data) => {
            // console.log(data);
            // res.send({success: true, msg: data.dataValues.token});
            // res.send({success: true, msg: token});
            // res.redirect('/welcome');
        }).catch((err) => {
            // console.log(err);
            // res.send({success: false, msg: err});
        });
        */
        // console.log(store.get('devices_found'));
        // if (t == 1) {
            // console.log(data.devices[t].name);
        // }
        // console.log(data.devices);
        // res.send({success: true, msg: data.devices});

        // console.log(Object.entries(devices_found)[2]);

        // t++;
    });

    browser.start();
    // console.log(store.get('devices_found'));

    setTimeout(function () {
        /*
        // MySQL or PostgreSQL
        FoundDevices.findAll({
            raw: true,
            where: {
                browse_token: token
            }
        })
        // MongoDB
        // User.findOne({browse_token: token})
        .then((data) => {
            if (Object.keys(data).length == 0) {
                console.log('Error! No devices found');
                res.send({success: false, msg: 'Error! No devices found'});
            } else {
                console.log(data);
                // data[0].device_name
                res.send({success: true, msg: data});
            }
        }).catch((err) => {
            console.log(err);
            res.send({success: false, msg: err});
        });
        */
        /*
        browser.getList().forEach(function(item) {
            console.log(item);
        });
        */
        browser.destroy();
        res.send({success: true, msg: browser.getList()});
        // res.send({success: true, msg: 'nothing'});
    }, 5000);
})

/*
// MySQL or PostgreSQL
FoundDevices.findAll({
    raw: true,
    where: {
        token: 'c4mnaxn4f94g6cyrt71hl4'
    }
})
.then((data) => {
    // console.log(data);
    data.forEach(function(item) {
        console.log(item.device_name);
    });
}).catch((err) => {
    console.log(err);
});
*/


/*
app.get('/logout',(req, res) => {
    // req.session.destroy();
    // res.redirect('/signin');
});
*/

// https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

/*
app.listen(3001, () => {
    console.log('Server is running!');
});
*/

/*
http.createServer(app).listen( 3001, () => {
    console.log('Server is running on http!');
});
*/

module.exports = app;