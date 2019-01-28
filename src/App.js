// Importing the important stuff
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

// Routes for React
import Home from './elements/pages/unsecure/home.js';
import Directory from './elements/pages/unsecure/directory.js';
import Login from './elements/pages/unsecure/login.js';
import Register from './elements/pages/unsecure/register.js';
import Dash from './elements/pages/secure/dashboard.js';

// Import styles and utilities
import './css/App.css';
import './css/traildog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js/dist/popper.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              head-banner
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">TrailDog</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Trail Directory
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">Option 1</a>
                        <a className="dropdown-item" href="/">Option 2</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Option 3</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/register">Register</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div className="content-container px-3">
            <Route exact path="/" component={Home}/>
            <Route path="/directory" component={Directory}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/dashboard" component={Dash}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
