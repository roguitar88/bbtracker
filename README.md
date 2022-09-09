# bbtracker
BBTracker

BBTracker is an application basically made with React and Node.js whose main goal is to serve novice and wannabe Basketball Players around the world. It replaces the old method of taking notes on a notebook, which saves time both of players and coaches. Moreover, it's for study purposes and a practical example of how a login/registration must be done using the latest technology.

This application has been made thanks to the following technologies:
* ReactJS (version 18.2.0), Yarn (version 1.22.19)
* Node.js (version 12.22.12)
* Nginx (Web server, version 1.18.0)
* OCI (Oracle Cloud Infrastructure): VM with 4GB RAM and 1 CPU core, Ubuntu 20.04 LTS
* MySQL (version 8.0.30)

What we have until now is only the login and registration module, so many other modules are lacking and need to be made and continued. If you wanna go on with this project, don't hesitate to contact me.

## 

## Requirements

As requirements to run the project, all you need to have installed in your machine/server is Node.js, MySQL and Nginx (via Laragon in Windows OS)

## Database

The database is in **/server** directory. Import that database to your MySQL environment.
*Note:* The database connection credentials you can find in /server/models/db_test.js and /server/models/db_prod.js. Alter it, if it's the case.

## Instructions

Okay. If you noticed, the project is separated into two folders: the client and the server. Using a terminal, enter the **/client** and **/server** directories and run the command:

```
npm i --save --force
```

Install **yarn** in order to be able to work with React and run the project.

```
npm i --global yarn
```

After creating the **node_modules** directory, and to initialize the app services (the client side) enter the **/client** directory and run:

```
yarn start
```

And finally don't forget to initialize the server-side part of the application:

```
node test.js
```

And... That's it!

## Running project in production

*Note:* Before the web server config below, install the SSL certificate by using ```sudo certbot --nginx```. If you don't have Certbot installed in your server, just refer to: ***[https://certbot.eff.org/instructions](https://certbot.eff.org/instructions)***.

### Nginx config
```
server {
    listen 80 default_server;
    listen [::]:80 default_server; #ipv6

    server_name bbtracker.tk www.bbtracker.tk;

    # Redirect all insecure http:// requests to https://
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2 default_server;
    listen [::]:443 ssl http2 default_server;
    server_name bbtracker.tk www.bbtracker.tk;

    root /var/www/html/bbtracker/client/build;
    index index.html index.htm;
    try_files $uri /index.html;

    ssl_protocols TLSv1.2;

    # Fix 'The Logjam Attack'.
    ssl_ciphers EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH;
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/ssl/dh2048_param.pem;

    location / {
        try_files $uri $uri/ = 404;
    }

    charset utf-8;

    location ~ /\.ht {
        deny all;
    }

    ssl_certificate /etc/letsencrypt/live/bbtracker.tk/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/bbtracker.tk/privkey.pem; # managed by Certbot
}
```

In client directory run:
```
sudo yarn start
```

In server directory run:
```
sudo node prod.js
```

### Build
Run ```npm run build```, restart Nginx and...

That's it!

*Note:* React (client) will be running on port 3000, whilst Node (client) will be running on port 3001. So just make sure those ports are freed up in the firewall/network settings.