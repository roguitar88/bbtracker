# bbtracker
BBTracker

BBTracker is an application basically made with React and Nodejs whose main goal is to serve novice and wannabe Basketball Players around the world. It replaces the old method of taking notes on a notebook, which saves time both of players and coaches. Moreover, it's for study purposes and a practical example of how a login/registration must be done using the latest technology.

This application has been made thanks to the following technologies:
* ReactJS (version 18.2.0), Yarn (version 1.22.19)
* NodeJS (version 12.22.12)
* Nginx (Web server, version 1.18.0)
* OCI (Oracle Cloud Infrastructure): VM with 4GB RAM and 1 CPU core, Ubuntu 20.04 LTS
* MySQL (version 8.0.30)

What we have until now is only the login and registration module, so many other modules are lacking and need to be made and continued. If you wanna go on with this project, don't hesitate to contact me.

## 

## Requirements

As requirements to run the project, all you need to have installed in your machine/server is NodeJS, MySQL and Nginx (via Laragon in Windows OS)

## Database

The database is in **/server** directory. Import that database to your MySQL environment.

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
node index.js
```

And... That's it!
