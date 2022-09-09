import React from 'react';
// import Player from './assets/img/basketball-player.png';
import auth from './auth';
import Logo from './assets/img/logo.png';
// import Cover from './assets/img/baskteball-cover.jpg'
import history from './utils/history';

const signout = () => {
  if (auth.isAuthenticated()) {
    let userId = localStorage.getItem('userId');
    auth.logout(userId);

    history.push('/signin');
    history.go();
  }
}

let navBtns;
if (!auth.isAuthenticated()) {
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
    <li><button onClick={signout}>Sign Out</button></li>
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