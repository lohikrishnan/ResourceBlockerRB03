import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';
import Login from './User/Login';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ResetPassword from './User/ResetPassword';


function App() {
  return (
    <Router>
    <div className="App">
        <NavBarComp />
        <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/resetPassword" component={ResetPassword}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
