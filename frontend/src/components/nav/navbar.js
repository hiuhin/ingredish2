import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="right-links">
          <button className="button" onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="right-links">
          <Link className="button" to={"/signup"}>Signup</Link>
          <Link className="button" to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-left">
          <h1>MasterChef</h1>
        </div>
        <div className="nav-right">
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
