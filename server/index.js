const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const router = express.Router();
// const db  = require('./models/db');
const User = require('./models/User');
// const { QueryTypes } = require('sequelize');
const hp = require('./helper');

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');

app.use(express.json());
app.use(cors({
    // origin: ['http://localhost:3000', 'http://bbtracker.test', 'https://bbtracker.tk'],
    origin: [baseUrl],
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

/*
app.get('/max', (req, res) => {
    res.send('This is max!');
});
*/

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

    User.findAll({
        raw: true,
        where: {
            email: email
        }
    }).then((data) => {
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
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    console.log(err);
                    res.send({success: false, msg: err});
                }

                User.create({
                    name: name,
                    email: email,
                    password: hash
                }).then((user) => {
                    /*
                    req.session.userId = data[0].id;
                    console.log(req.session.userId);
                    */

                    console.log('User registered successfully');
                    res.send({success: true, msg: 'User registered successfully', userId: user.dataValues.id});
                    // res.redirect('/welcome');
                }).catch((err) => {
                    console.log(err);
                    res.send({success: false, msg: err});
                });    
            });
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

    User.findAll({
        raw: true,
        where: {
            id: userId
        }
    }).then((data) => {
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

    User.findAll({
        raw: true,
        where: {
            email: email
        }
    }).then((data) => {
        if (Object.keys(data).length == 0) {
            // error.push(0);
            console.log('Email not found');
            res.send({success: false, msg: 'Email not found'});
        } else {
            bcrypt.compare(password, data[0].password, (error, result) => {
                if (!result) {
                    console.log('Password incorrect');
                    res.send({success: false, msg: 'Password incorrect'});
                } else {
                    console.log('User logged in successfully!');
                    res.send({success: true, msg: 'User logged in successfully!', userId: data[0].id});
                    // res.redirect('/welcome');
                }
            });
        }
    });
});

/*
app.get('/logout',(req, res) => {
    // req.session.destroy();
    // res.redirect('/signin');
});
*/

app.listen(3001, function () {
    console.log('Server is running!');
});