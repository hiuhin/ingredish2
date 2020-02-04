import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss';
import logo from '../../images/ingredish-logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);

    // set toggle state for responsive menu button
    this.state = {
      active: false,
      classname: "nav-icon",
      menu: "menu-hidden"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const currState = this.state.active;
    // debugger
    this.setState({ active: !currState });
    this.state.active
      ? this.setState({ classname: "nav-icon-active" })
      : this.setState({ classname: "nav-icon" });
    this.state.active
      ? this.setState({ menu: "menu-active" })
      : this.setState({ menu: "menu-hidden" });
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar">
          <div className="nav-left">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="nav-right">
            <div className={this.state.classname} onClick={() => this.toggle()}>
              <div></div>
            </div>
            <div className={this.state.menu}>
              <div className="menu-buttons">
                <button onClick={this.logoutUser}>
                  Logout
                </button>
              </div>
            </div>
            <div className="right-links">
              <button onClick={this.logoutUser}>
                Logout
              </button>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="navbar">
          <div className="nav-left">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="nav-right">
            <div className={this.state.classname} onClick={() => this.toggle()}>
              <div></div>
            </div>
            <div className={this.state.menu}>
              <div className="menu-buttons">
                <button onClick={() => this.props.openModal("signup")}>
                  Signup
                </button>
                <button onClick={() => this.props.openModal("login")}>
                  Login
                </button>
              </div>
            </div>
            {/* {this.getLinks()} */}
            <div className="right-links">
              <button onClick={() => this.props.openModal("signup")}>
                Signup
              </button>
              <button onClick={() => this.props.openModal("login")}>Login</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default NavBar;
