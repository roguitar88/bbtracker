// import React from 'react';

import { useState } from 'react';

import DOMPurify from 'dompurify';

import basketballIcon from '../../assets/img/basketball.png';

// import { Formik, Form, Field, ErrorMessage } from 'formik';

import Axios from 'axios';

// import history from '../../utils/history';

import { baseUrl } from '../../utils/global';

// import { token } from '../../utils/token';

function Test() {
    let [loadingDisplay, setLoadingDisplay] = useState('none');
    let [devicesBoxDisplay, setDevicesBoxDisplay] = useState('none');
    let [devicesList, setDevicesList] = useState('');
    // let [emailValMsg, setEmailValMsg] = useState("");
    // let [passValMsg, setPassValMsg] = useState("");

    Axios.defaults.withCredentials = true;
    const handleClickBrowse = (values) => {
        // document.querySelector('.loading').style.display = 'block';
        setLoadingDisplay('block');
        // console.log(values);
        Axios.post(baseUrl + ":3001/browse", {
            // token: token
            // email: values.email,
            // password: values.password
        }).then((response) => {
            console.log(response);
            setLoadingDisplay('none');
            let data2 = response.data.msg;
            if (response.data.success) {
                console.log(data2);
                // let html = '';
                let html = '<ul>';
                data2.forEach(function(item, index) {
                    // item[1].forEach(function(item2, index2) {
                    html += `
                        <li>${item.name}</li>
                    `;
                    // });
                });
                html += '</ul>';
                setDevicesList(html);
                // auth.login(response.data.userId);
                // history.push('/welcome');
                // history.go();
            } else {
                setDevicesList(data2); // If you don't handle this object, an error will be thrown
                // if (response.data.msg === 'Email not found') setEmailValMsg(response.data.msg);
            }
            setDevicesBoxDisplay('block');
        });
    };
  
    return (
        <div className="custom-body">

            <div className="loading" style={{ display: loadingDisplay }}>
                <div className="await"></div>
                <div className="animated-ellipsis">
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>

            <div className="show-devices" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(devicesList)}} style={{ display: devicesBoxDisplay }}></div>

            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        {/* <Formik initialValues={{}} onSubmit={handleClickBrowse}> */}
                            {/* <Form className="login-form"> */}
                            <div className="login-form">
                                <span className="login-form-title"><a href="/">BBTracker</a></span>

                                <span className="login-form-title">
                                    <img src={basketballIcon} alt="BBTracker" />
                                </span>

                                <div className="container-login-form-btn">
                                    <button type="submit" onClick={handleClickBrowse} className="login-form-btn">Browse devices</button>
                                </div>
                            </div>
                            {/* </Form> */}
                        {/* </Formik> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
