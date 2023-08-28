import React, { Component } from "react";
import LoginForm from "./loginform";
import Dashboard from "../dashboard";

class Login extends Component {
  state = {
    loggedIn: false,
  };
  login = () => this.setState({ loggedIn: true });
  logout = () => this.setState({ loggedIn: false });
  render() {
    if (!this.state.loggedIn) {
      return (
        <div className="loginWrapper">
          <LoginForm
            login={this.login}
            logout={this.logout}
          />
        </div>
      );
    }

    return <Dashboard />;
  }
}
export default Login;
