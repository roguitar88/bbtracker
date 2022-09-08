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

var baseUrl = window.location.origin;

function Signup() {
  // let [loginStatus, setLoginStatus] = useState(false);
  let [loading, setLoading] = useState('none');
  let [nameValMsg, setNameValMsg] = useState("");
  let [emailValMsg, setEmailValMsg] = useState("");
  let [passValMsg, setPassValMsg] = useState("");
  // let navigate = useNavigate();

  let handleChange = () => {
    setNameValMsg('');
    setEmailValMsg('');
    setPassValMsg('');
  }

  Axios.defaults.withCredentials = true;
  const handleClickRegister = (values) => {
    setLoading('block');
    Axios.post(baseUrl + ":3001/user/new", {
      name: values.name,
      email: values.email,
      password: values.password
    }).then((response) => {
      // console.log(response);
      if (response.data.success) {
        auth.login(response.data.userId);
        // navigate('/welcome');
        history.push('/welcome');
        history.go();
      } else {
        setLoading('none');
        if (response.data.msg === 'This email already exists. Try to login with it') setEmailValMsg(response.data.msg);
        if (response.data.msg === 'Password must have at least 8 characters including lower case, upper case letters, numbers and symbols')setPassValMsg(response.data.msg);
        // if (response.data.msg !== 'This email already exists. Try to login with it' && response.data.msg === 'Password must have at least 8 characters including lower case, upper case letters, numbers and symbols') alert(response.data.msg); 
      }
    });
  }
  
  /*
  useEffect(() => {
    Axios.get(baseUrl + ':3001/user/login').then((response) => {
      // console.log(response);
      // setLoginStatus(response.data.loggedIn);
      // if (loginStatus) navigate('/welcome');
      if (response.data.loggedIn) navigate('/welcome');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  let validationRegister = yup.object().shape({
    name: yup.string().required('This field is mandatory'),
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
            <Formik initialValues={{name: '', email: '', password: ''}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
              <Form className="login-form">
                <span className="login-form-title"><a href="/">BBTracker</a></span>

                <span className="login-form-title">
                  <img src={basketballIcon} alt="BBTracker" />
                </span>

                <div className="wrap-input">
                  <Field className="has-val input" name="name" type="text" placeholder="Full Name" onKeyDown={handleChange} />
                  <span className="focus-input" placeholder="">{nameValMsg}</span>
                  <ErrorMessage component="span" name="name" className="focus-input" />
                </div>

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
                  <button className="login-form-btn" type="submit">Sign up</button>
                </div>

                <div className="text-center">
                  <span className="txt1">Already registered?</span>

                  <a className="txt2" href="/signin">Log in here</a>
                </div>

              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
