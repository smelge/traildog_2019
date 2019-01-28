import React,{Component} from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';

class Register extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12">
          Registration Page<br/>
          <ul>
            <li>Username</li>
            <li>Password</li>
            <li>Repeat Password</li>
            <li>T&C's</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Register;
