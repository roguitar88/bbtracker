import React from 'react';
// import Player from './assets/img/basketball-player.png';
import auth from '.auth';
import Logo from './assets/img/logo.png';
// import Cover from './assets/img/baskteball-cover.jpg'

let navBtns;
if (!auth.Authenticated()) {
  navBtns = 
  <ul>
    <li><a href="/signup"><button>Sign Up</button></a></li>
    <li><a href="/signin"><button>Sign In</button></a></li>
    <li><a href="/app"><button>Get the App</button></a></li>
  </ul>
  ;
} else {
  navBtns = 
  <ul>
    <li><a href="/signout"><button>Sign Out</button></a></li>
    <li><a href="/app"><button>Get the App</button></a></li>
  </ul>
  ;
}

function Headers() {
  return (
    <div id="header">
      <nav>
        <span id="brand">
          <img src={Logo} alt="logo" />Btracker
        </span>
        
        {navBtns}
      </nav>
    </div>
  );
}

export default Headers;