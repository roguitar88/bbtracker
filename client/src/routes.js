// import React from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import auth from './auth';

import Main from './views/Main';
import Signup from './views/Signup';
import Signin from './views/Signin';
import Welcome from './views/Welcome';
import Signout from './views/Signout';

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/welcome" element={!auth.isAuthenticated() ? <Navigate replace to="/signin" /> : <Welcome />}></Route>
                <Route path="/signout" element={<Signout />}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;