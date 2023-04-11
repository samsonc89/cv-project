import React, { Component } from "react";
import "./preview.css";

class Preview extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="preview__container">
        <div className="preview__heading"></div>
        <div className="preview__content-container">
          <div className="preview__personal-info"></div>
          <div className="preview__content"></div>
        </div>
      </div>
    );
  }
}

export default Preview;
