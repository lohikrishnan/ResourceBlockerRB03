import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';
import Login from './User/Login';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ForgetPasswordVerification from './User/ForgetPasswordVerification';
import ForgetPasswordReset from './User/ForgetPasswordReset';
import ResetPassword from './User/ResetPassword';


function App() {
  return (
    <Router>
    <div className="App">
        <NavBarComp />
        <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/forgetPasswordVerification" component={ForgetPasswordVerification}/>
        <Route path="/forgetPasswordReset" component={ForgetPasswordReset}/>
        <Route path="/resetPassword" component={ResetPassword}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
