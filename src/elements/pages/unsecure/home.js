import React,{Component} from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div className="row is-flex">
        <div className="col-sm-3">
          <div className="content-block">
            Featured Trail
            <br/>
            <br/>
          </div>
          <div className="content-block">
            Featured Video
          </div>
        </div>

        <div className="col-sm-6">
          <div className="content-block">
            Featured Photo
          </div>
        </div>

        <div className="col-sm-3">
          <div className="content-block">
            Latest Uploads
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
