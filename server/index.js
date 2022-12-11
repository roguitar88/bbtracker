// const express = require('express');
// const app = express();
const web = require('./web');
// const environment = process.env.NODE_ENV || 'development';
// const bcrypt = require('bcrypt-nodejs');
// const saltRounds = 10;
// const router = express.Router();

// const ca = fs.readFileSync('/etc/letsencrypt/live/websocket.bbtracker.tk/chain.pem', 'utf8');

// const credentials = {key: privateKey, cert: certificate, ca: ca};
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// var baseUrl = window.location.origin;

// Note: NODE_ENV=production sudo node app.js

// https://stackoverflow.com/questions/11744975/enabling-https-on-express-js
// console.log('O que houve');
if (appEnvironment === 'production') {
    const fs = require('fs');
    const https = require('https');

    const privateKey  = fs.readFileSync('/etc/letsencrypt/live/websocket.bbtracker.tk/privkey.pem');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/websocket.bbtracker.tk/fullchain.pem');
    const credentials = {key: privateKey, cert: certificate};

    https.createServer(credentials, web).listen( 3001, () => {
        console.log('Server is running on https!');
    });
} else {
    web.listen(3001, () => {
        console.log('Server is running!');
    });
}

/*
http.createServer(app).listen( 3001, () => {
    console.log('Server is running on http!');
});
*/

/*
https.createServer(credentials, app).listen( 3001, () => {
    console.log('Server is running on https!');
});
*/