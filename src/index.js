import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const routing = (
    <Router>
        <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
            <Menu>
            <Route exact path="/app" component={App} />                   
                    {/* <Route component={Notfound} /> */}                
            <Footer />
            </Menu>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
