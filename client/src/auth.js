// import { useNavigate } from "react-router-dom";

// let navigate = useNavigate();

class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(id) {
        localStorage.setItem("userId", id);
        // this.authenticated = true;
    }

    logout(id) {
        localStorage.removeItem("userId", id);
        // this.props.history.push('/signin');
        // this.authenticated = false;
    }

    isAuthenticated() {
        this.authenticated = localStorage.getItem("userId") !== null ? true: false;
        return this.authenticated;
    }
}

export default new Auth();