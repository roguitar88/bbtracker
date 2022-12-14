# bbtracker
BBTracker

BBTracker is an application basically made with React and Node.js whose main goal is to serve novice and wannabe Basketball Players around the world. It replaces the old method of taking notes on a notebook, which saves time both of players and coaches. Moreover, it's for study purposes and a practical example of how a login/registration must be done using the latest technology.

This application has been made thanks to the following technologies:
* ReactJS (version 18.2.0), Yarn (version 1.22.19)
* Node.js (version 16.7.0 LTS)
* Nginx (Web server, version 1.18.0)
* OCI (Oracle Cloud Infrastructure): VM with 4GB RAM and 1 CPU core, Ubuntu 20.04 LTS
* MySQL (version 8.0.30)

What we have until now is only the login and registration module, so many other modules are lacking and need to be made and continued. If you wanna go on with this project, don't hesitate to contact me.

## 

## Requirements

As requirements to run the project, all you need to have installed in your machine/server is Node.js, MySQL and Nginx (via Laragon in Windows OS)

## Database

The database is in **/server** directory. Import that database to your MySQL environment.
*Note:* The database connection credentials you can find in /server/models/db.js. Alter it, if it's the case.

## Instructions (for localhost)

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

And finally don't forget to initialize the server-side part of the application, by using Nodemon (you're recommended to install it via the command ```sudo npm install -g nodemon```):

```
nodemon index.js
```

And... That's it!

*Warning*: Don't forget to create the .env file and add ```NODE_ENV="development"```. That .env file must also be included in the .gitignore file
If you're using Windows, try to use this project with Laragon and in Nginx, add a config file like this:

### Nginx configuration (to be run with *build*: RECOMMENDED):
```
server {
    listen 80;
    server_name bbtracker.test *.bbtracker.test;
    root "C:/laragon/www/bbtracker/client/build";
    
    index index.html index.htm;
	try_files $uri /index.html;
		
    location / {
		try_files $uri $uri/ = 404;
	}
	
    charset utf-8;
	
    location ~ /\.ht {
        deny all;
    }
}
```

Then run ```npm run build``` and restart Nginx.

### Nginx configuration (manipulating ports through reverse proxy: NOT RECOMMENDED):

```
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

upstream client {
	server localhost:3000;
}

upstream api {
    server localhost:3001;
}

server {
    listen 80;
    server_name bbtracker.test *.bbtracker.test;
    		
    location / {
		proxy_pass http://client;
	}
	
	location /ws {
		proxy_pass http://client;
		proxy_http_version 1.1;
		proxy_set_header    Upgrade $http_upgrade;
		#proxy_set_header    Connection 'upgrade';
		proxy_set_header    Connection $connection_upgrade;
	}
	
	location /api {
		rewrite /api/(.*) /$1 break;
		proxy_pass http://api;
	}
	
    charset utf-8;
	
    location ~ /\.ht {
        deny all;
    }
}
```

## Running project in production

*Note:* Before the web server config below, install the SSL certificate by using ```sudo certbot --nginx```. If you don't have Certbot installed in your server, just refer to: ***[https://certbot.eff.org/instructions](https://certbot.eff.org/instructions)***.

### Nginx config (for ReactJS)
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
sudo nodemon index.js
```

### Build
Run ```npm run build```, restart Nginx and...

That's it!

*Note:* Node (client) will be running on port 3001. So just make sure those ports are freed up in the firewall/network settings. For that purpose, if you're using a Cloud service, add this port to your network gateway. Then, inside your server or VM, just install something like *Firewalld* and enable it like this:

```
# Installing Firewalld
sudo apt install firewalld

# Adding the port 3001 (but it can be any other) as the default one for running Node server
sudo firewall-cmd --zone=public --permanent --add-port=3001/tcp

# Don't forget to reload Firewalld in order that the changes are reflected
sudo firewall-cmd --reload

# Check whether port is already there
sudo firewall-cmd --zone=public --list-ports
```

*Warning*: In your server (more precisely in the application directory), don't forget to create the .env file and add ```NODE_ENV="production"```.