import React,{Component} from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';

class Login extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12">
          Login Page<br/>
          <ul>
            <li>Username</li>
            <li>Password</li>
            <li>Forgotten Password</li>
            <li><Link to="/register">Not a member? Register!</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Login;
