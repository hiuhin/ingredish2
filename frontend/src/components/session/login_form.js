// src/components/session/login_form.js

import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.scss";
import egg from "../../images/egg1.png";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/search");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user)
      // .then(() => this.props.closeModal())
      // .then(() => this.props.history.push("/search"));
    
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="each-error" key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="login-form-container">

        {this.renderErrors()}

        <div className="login-form">
          <div className="title">Log in</div>

          <form>
            <div className="inner-login-form">
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />

              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              
              <div /><img src={egg} className="submit" onClick={this.handleSubmit} width="65px" height="65px" /></div>
      
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
