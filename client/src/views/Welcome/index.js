// import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import auth from '../../auth';

// var baseUrl = window.location.origin;

function Welcome() {
  const [name, setName] = useState("");
  // let navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.post('http://localhost:3001/user/data', {
      id: localStorage.getItem('userId')
    }).then((response) => {
      console.log(response);
      if (response.data.success) setName(response.data.data[0].name);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div id="welcome">
      <h1>Hi, {name}</h1>
      <a href="/signout"><button>Sign out</button></a>
    </div>
  );
}

export default Welcome;