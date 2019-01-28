import React,{Component} from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';

class Dash extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12">
          Secure User Dashboard<br/>
          <ul>
            <li>Dashboard stuff</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Dash;
