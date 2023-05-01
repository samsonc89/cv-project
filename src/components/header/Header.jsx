import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    const { onClicked } = this.props;
    return (
      <div className="header__container section__padding">
        <div className="header--logo">CV Creator</div>
        <button>Clear</button>
      </div>
    );
  }
}

export default Header;
