// import { useEffect } from 'react';

import auth from '../../auth';

// import { useNavigate } from "react-router-dom";

import history from '../../utils/history';

var baseUrl = window.location.origin;

function Signout() {
    // let navigate = useNavigate();
    let userId = localStorage.getItem('userId');

    if (userId !== null) auth.logout(userId);

    history.push('/signin');
    history.go();
    /*
    useEffect(() => {
        navigate('/signin');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    */
}

export default Signout;