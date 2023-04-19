import React, { Component } from "react";
import "./preview.css";

class Preview extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="preview__content-container">
        <div className="preview__heading">
          <h1>First Name</h1>
          <h2>Title</h2>
        </div>
        <div className="preview__content">
          <div className="preview__personal-info">
            <h3>Address</h3>
            <h3>Phone Number</h3>
            <h3>Email</h3>
            <h3>LinkedIn</h3>
          </div>
          <div className="preview__experience">
            <div>Description</div>
            <div>Experience</div>
            <div>Education</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
