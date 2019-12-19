import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Savings from './components/Savings/Savings';
import Notfound from './components/NotFound/NotFound';
import Account from './components/Account/Account';

const routing = (
    <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />                 
          <Menu>          
            <Route exact path="/savings" component={Savings} /> 
            <Route exact path="/account" component={Account} />                                                     
          </Menu>
          {/* <Route component={Notfound} />  */}
        </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
