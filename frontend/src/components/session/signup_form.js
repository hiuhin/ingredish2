// src/components/session/signup_form.js

import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.scss";
import egg from "../../images/egg1.png";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
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
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props
      .signup(user, this.props.history)
      .then(() => this.props.closeModal());
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
      
      <div className="signup-form-container">

        {this.renderErrors()}

        <div className="signup-form">
          <div className="title">Sign Up</div>
          <form>
            <div className="inner-signup-form">
              <input
                type="text"
                value={this.state.handle}
                onChange={this.update("handle")}
                placeholder="Name"
              />

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

              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <div /><img src={egg} className="submit" onClick={this.handleSubmit} width="65px" height="65px" /></div>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
