import '../../style.css';

// var baseUrl = window.location.origin;

function Main() {
  // let [loginStatus, setLoginStatus] = useState(false);
  // let navigate = useNavigate();

  /*
  Axios.defaults.withCredentials = true;
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

  return(
    <div id="main">
      <h1>Homepage</h1>
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