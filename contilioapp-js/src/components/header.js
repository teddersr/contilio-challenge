import React, { Component } from "react";
import { ReactComponent as Logo } from "../svg/logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Logo />
          </div>
          <div className="title">
            <span>Contilio</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
