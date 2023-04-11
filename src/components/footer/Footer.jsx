import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer__container">
        <div className="footer__links">
          <div>Github</div>
          <div>LinkedIn</div>
          <div>Email</div>
        </div>
        <div>Copyright @samsonc89</div>
      </div>
    );
  }
}

export default Footer;
