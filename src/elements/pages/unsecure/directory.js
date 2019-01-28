import React,{Component} from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';

class Directory extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12">
          Trail Directory Page<br/>
          <ul>
            <li>Map of centres</li>
            <li>Filters</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Directory;
