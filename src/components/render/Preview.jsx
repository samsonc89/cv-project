import React, { Component } from "react";
import "./preview.css";
import Info from "../info/Info";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo } = this.props;
    return (
      <div className="preview__content-container">
        <div className="preview__heading">
          <h1>{personalInfo.firstName + " " + personalInfo.lastName}</h1>
          <h2>{personalInfo.title}</h2>
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
