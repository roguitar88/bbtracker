// import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import auth from '../../auth';
// import Basketboy from '../../assets/img/basketboy.jpg';
import basketballWoman from '../../assets/img/basketball-woman-transparent.png';

var baseUrl = window.location.origin;
// var baseUrl = 'http://localhost';

function Welcome() {
  const [name, setName] = useState("");
  // let navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.post(baseUrl + ':3001/user/data', {
      id: localStorage.getItem('userId')
    }).then((response) => {
      // console.log(response);
      // if (response.data.success) setName(response.data.data[0].name);
      if (response.data.success) setName(response.data.data.name);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div id="welcome">
      <h1>Hi, <span id="name">{name}</span></h1>
      <h3>Welcome to BBTracker</h3>
      <div className="cards">
        <div className="card">
          <h3>Crossover</h3>
          <h1>40</h1>
        </div>

        <div className="card">
          <h3>Between the legs</h3>
          <h1>22</h1>
        </div>

        <div className="card">
          <h3>Wraparound</h3>
          <h1>65</h1>
        </div>

        <div className="card">
          <h3>V dribble</h3>
          <h1>15</h1>
        </div>

        <div className="card">
          <h3>Power ups</h3>
          <h1>45</h1>
        </div>

        <div className="card">
          <h3>Over the head</h3>
          <h1>30</h1>
        </div>

        <div className="card">
          <h3>Jab steps</h3>
          <h1>19</h1>
        </div>
      </div>

      <div className="info">
        <img src={basketballWoman} alt="Basketball Woman" />
        {/* <span>You're still at<br /><em>Beginner</em> level</span> */}
      </div>
      {/* <a href="/signout"><button>Sign out</button></a> */}
    </div>
  );
}

export default Welcome;