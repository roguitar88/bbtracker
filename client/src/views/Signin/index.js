// import React from 'react';

import { useState } from 'react';
// useEffect,

import basketballIcon from '../../assets/img/basketball.png';

import {Formik, Form, Field, ErrorMessage} from 'formik';

import * as yup from 'yup';

import Axios from 'axios';

// import { useNavigate } from "react-router-dom";

import auth from '../../auth';

import history from '../../utils/history';

// import Spinner from './Spinner';
// import { useState, CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

var baseUrl = window.location.origin;

/*
const override: CSSProperties = {
  display: "block",
  margin: "auto",
  borderColor: "white",
  // backgroundColor: "rgba(204, 204, 204, .8)",
  position: "absolute",
  zIndex: "9999",
  width: "125px",
  height: "125px",
  top: '50%'
};
*/

function Signin() {
  /*
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  */

  /*
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    // console.log('email is:', event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    // console.log('password is:', event.target.value);
  };
  */

  /*
  const handleClickRegister = (values) => {
    Axios.post(baseUrl + ":3001/user/new", {
      name: values.name,
      email: values.email,
      password: values.password
    }).then((response) => {
      // console.log(response);
      alert(response.data.msg);
    });
  };
  */  

  /*
  function Child(value) {
    return (
      <div className="loading" style={{ display: value }}>
        <div className="await"></div>
          <div className="animated-ellipsis">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
      </div>
    );
  }
  */
  // console.log(Spinner(true));
  // Child();

  /*
  if (localStorage.getItem('userId') !== null) {
    history.push('/welcome');
    history.go();
  }
  */

  // let Spinner2 = Spinner(false);
  // document.querySelector('.sweet-loading').style.visibility = 'hidden';
  // let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#cf279c");
  // let [loginStatus, setLoginStatus] = useState(false);
  let [loading, setLoading] = useState('none');
  /*
  let [emailValidationMsg, setEmailValidationMsg] = useState(""); 
  let [passwordValidationMsg, setPasswordValidationMsg] = useState(""); 
  */
  let [emailValMsg, setEmailValMsg] = useState("");
  let [passValMsg, setPassValMsg] = useState("");
  // let navigate = useNavigate();

  let handleChange = () => {
    setEmailValMsg('');
    setPassValMsg('');
  }

  Axios.defaults.withCredentials = true;
  const handleClickLogin = (values) => {
    // document.querySelector('.loading').style.display = 'block';
    setLoading('block');
    // console.log(values);
    Axios.post(baseUrl + ":3001/user/login", {
      email: values.email, // values.email
      password: values.password // values.password
    }).then((response) => {
      console.log(response);
      
      if (response.data.success) {
        // document.querySelector('.loading').style.display = 'none';
        // Spinner2 = Spinner(false);
        // alert(response.data.msg);
        // return <Navigate replace to="/welcome" />;
        auth.login(response.data.userId);
        history.push('/welcome');
        history.go();
        // navigate('/welcome');
      } else {
        setLoading('none');
        if (response.data.msg === 'Email not found') setEmailValMsg(response.data.msg);
        if (response.data.msg === 'Password incorrect') setPassValMsg(response.data.msg);
        if (response.data.msg !== 'Email not found' && response.data.msg !== 'Password incorrect') alert(response.data.msg);
      }
    });
  };
  
  /*
  useEffect(() => {
    Axios.get('http://localhost:3001/user/login').then((response) => {
      // console.log(response);
      // setLoginStatus(response.data.loggedIn);
      // if (loginStatus) navigate('/welcome');
      if (response.data.loggedIn) navigate('/welcome');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  /*
  let validationLogin = yup.object().shape({
    email: yup.string().email('Invalid email').test('Unique Email','Email already in use', handleClickLogin)
  });
  */

  let validationLogin = yup.object().shape({
    email: yup.string().email('Invalid email').required('This field is mandatory'),
    password: yup.string().min(8, 'The password must contain at least 8 characters').required('This field is mandatory')
    // "The password must contain at least 8 characters"
  });

  return (
    <div className="custom-body">

      <div className="loading" style={{ display: loading }}>
        <div className="await"></div>
          <div className="animated-ellipsis">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
      </div>

      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <Formik initialValues={{email: '', password: ''}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
              <Form className="login-form">
                <span className="login-form-title"><a href="/">BBTracker</a></span>

                <span className="login-form-title">
                  <img src={basketballIcon} alt="BBTracker" />
                </span>

                <div className="wrap-input">
                  <Field className="has-val input" name="email" type="email" placeholder="Email" onKeyDown={handleChange} />
                  <span className="focus-input" placeholder="">{emailValMsg}</span>
                  <ErrorMessage component="span" name="email" className="focus-input" />
                </div>

                <div className="wrap-input">
                  <Field className="has-val input" name="password" type="password" placeholder="Password" onKeyDown={handleChange} />
                  <span className="focus-input" placeholder="">{passValMsg}</span>
                  <ErrorMessage component="span" name="password" className="focus-input" />
                </div>

                <div className="container-login-form-btn">
                  <button className="login-form-btn" type="submit">Sign in</button>
                </div>

                <div className="text-center">
                  <span className="txt1">Not registered yet?</span>

                  <a className="txt2" href="/signup">Create an account</a>
                </div>

              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
