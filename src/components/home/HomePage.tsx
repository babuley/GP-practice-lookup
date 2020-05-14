import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
  const { isAuthenticated, login } = this.props.auth;
  return (
    <div className="jumbotron jumbotron-fluid">
      <h1>NHS GP Practices Lookup</h1>
      { !isAuthenticated() ? 
        (<button className="btn btn-primary btn-lg"
          onClick={login()}>Log In</button>)
       : (<div/>)
       }
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
  }
}

export default HomePage;
