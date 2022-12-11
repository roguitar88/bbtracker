const express = require('express');
const app = express();
/*
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: [...],
    // origin: [baseUrl],
    methods: ['GET', 'POST'],
    credentials: true
}));
*/
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
// const io = new Server(server);

const io = new Server(server, {
  cors: {
    origin: [
      "http://zuump.test", "http://academiadolacador.zuump.test",
      "http://zuump.net", "https://zuump.net", "http://academiadolacador.zuump.net", "https://academiadolacador.zuump.net"],
    methods: ["GET", "POST"]
  }
});

// const Property = require('../server/models/Property');
const Property = require('./models/Property');
// const Message = require('../server/models/Message');
const Message = require('./models/Message');
// const hp = require('../server/helper');
const hp = require('./helper');

/*
const io = new Server(server, {
  path: "/server/wsapi/"
});
*/

/*
app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

io.on('connection', (socket) => {
  /*
  console.log('a user connected');
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
  */
  // let curTime = hp.convertDateTime(hp.nDate).n_date + ' ' + hp.convertDateTime(hp.nDate).n_time;
  socket.on('load messages', (data) => {
    let limit = data.limit; //20;
    let page = data.page;
    Message.findAll({
      raw: true,
      where: {
        info: {
          room_id: data.room
        }
      },
      order: [
        ['id', 'DESC']
      ],
      offset:((page-1)*limit),
      limit: limit,
      subQuery: false
    })
    .then((msg) => {
      if (Object.keys(msg).length == 0) {
        let ret = {error: null, info: 'No messages could be found', sender_id: data.user_id};
        // console.log(msg);
        // console.log(ret.info);
        io.emit('load messages', ret);
      } else {
        msg.forEach(function(key) {
          key.info.msg_time = hp.convertDateTime(key.info.msg_time).date_time;
        });
        let ret = {error: null, info: msg, sender_id: data.user_id};
        // console.log(msg);
        io.emit('load messages', ret);
      }
    })
    .catch((err) => {
      // console.log(err); // Err when checking if property exists
      let ret = {error: err, sender_id: data.user_id};
      io.emit('load messages', ret);
    });
  });

  socket.on('chat message', (data) => {
    // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
    // User.findAll({
    Property.findOne({
      raw: true,
      where: {
        property_domain: data.domain
      }
    })
    .then((prop) => {
      if (prop === null) {
        // console.log('Current domain is not a property');
        // throw Error('Current domain is not a property, pal!');
        let ret = {error: 'Current domain is not a property, pal! You need to register the domain at http://bbtracker.tk in order to send messages'};
        io.emit('chat message', ret);
      } else {
        let curTime = hp.convertDateTime(data.datetime).n_date + ' ' + hp.convertDateTime(data.datetime).n_time;
        let dateTime = hp.convertDateTime(data.datetime).date_time;
        let jsonb = {sender_id: data.user_id, property_id: prop.id, name: data.name, room_id: data.room, message: data.shout, msg_time: curTime}; // hp.curTime
        Message.create({
          // info: JSON.stringify(jsonb)
          info: jsonb
        }).then((msg) => {
          // console.log('New message inserted');
          // console.log(msg.dataValues.info.message);
          console.log(data.name + ': ' + data.shout);
          let ret = {name: data.name, room_id: data.room, shout: data.shout, datetime: dateTime, sender_id: data.user_id, error: null}; // hp.dateTime
          io.emit('chat message', ret);
        }).catch((err) => {
          // console.log(err); // Err when inserting new message
          let ret = {error: err};
          io.emit('chat message', ret);
        });
      }
    }).catch((err) => {
      // console.log(err); // Err when checking if property exists
      let ret = {error: err};
      io.emit('chat message', ret);
    });
  });
});

/*
if (appEnvironment === 'production') {
  const fs = require('fs');
  const https = require('https');

  const privateKey  = fs.readFileSync('/etc/letsencrypt/live/websocket.bbtracker.tk/privkey.pem');
  const certificate = fs.readFileSync('/etc/letsencrypt/live/websocket.bbtracker.tk/fullchain.pem');
  const credentials = {key: privateKey, cert: certificate};

  https.createServer(credentials, server).listen( 3003, () => {
      console.log('Server is running on https!');
  });
} else {
  server.listen(3003, () => {
      console.log('Server is running!');
  });
}
*/

server.listen(3003, () => {
  console.log('listening on *:3003');
});