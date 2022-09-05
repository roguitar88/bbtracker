import React from 'react';
import Logo from './assets/img/logo.png';
import googleplay from './assets/img/googleplay.png';
import appstore from './assets/img/appstore.png';
import sslsecure from './assets/img/ssl-secure.png';

function Footer() {
  return (
    <div id="footer">
      <span id="brand">
        <img src={Logo} alt="logo" />Btracker
      </span>
      
      <div>
        <ul>
          <li><h1>Platform</h1></li>
          <li><a href="/plans">Plans</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/associates">Associates</a></li>
          <li><a href="/partnership">Become a partner</a></li>
        </ul>

        <ul>
          <li><h1>Terms</h1></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/reimbursements">Reimbursements</a></li>
          <li><a href="/group_rules">Group Rules</a></li>
        </ul>

        <ul>
          <li><h1>Coaches</h1></li>
          <li><a href="/mark_thompson">Mark Thompson</a></li>
          <li><a href="/oswald_tarantino">Oswald Tarantino</a></li>
          <li><a href="/jake_kate">Jake Kate</a></li>
          <li><a href="/dick_morrison">Dick Morrison</a></li>
        </ul>

        <ul>
          <li><a href="/google_play"><img src={googleplay} alt="Google Play" /></a></li>
          <li><a href="/app_store"><img src={appstore} alt="App Store" /></a></li>
          <li><img src={sslsecure} alt="SSL secured website" /></li>
        </ul>
      </div>

      <div style={{fontSize: '.8rem'}}>
        &copy; All rights reserved to BBTracker
      </div>
    </div>
  );
}

export default Footer;