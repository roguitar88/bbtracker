import style from '../../style.css';

// var baseUrl = window.location.origin;

import animated from '../../assets/img/animated.gif';

import googleplay from '../../assets/img/googleplay.png';

import appstore from '../../assets/img/appstore.png';

// import history from '../../utils/history';

function Main() {
  // let [loginStatus, setLoginStatus] = useState(false);
  // let navigate = useNavigate();

  /*
  Axios.defaults.withCredentials = true;
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

  return(
    <div id="main" style={{ background: `url(${animated}), linear-gradient(50deg,#735244,#382920)`, backgroundSize: 'cover', height: '100vh', backgroundAttachment: 'fixed' }}>
      {/* background: url(../../assets/img/basketball-cover.jpg);
      background-size: cover; */}

      {/*
      <style>
      {
        `
        body {
          background-color: rgba(247, 246, 235, 1);
          background-image: url("../../assets/img/basketball-cover.jpg");
          background-size: cover;
          background-position: 0 0;
        }
        `
      }
      </style>
      */}

      {/* <img src={animated} style={{width: '100%'}} alt="Basketball animation" /> */}

      <h1>Monitoring your performance<br />and progress</h1>
      <h3>... Is now under your fingers</h3>

      <span>
        <a href="/google_play"><img src={googleplay} alt="Google Play Store" /></a>
        <a href="/play_store"><img src={appstore} alt="Alt Play Store" /></a>
      </span>
    </div>
  );
}

export default Main;
/*
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/