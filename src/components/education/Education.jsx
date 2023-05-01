import React, { Component } from "react";
import "./education.css";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    const { onClicked } = this.props;
    return (
      <div className="education__container">
        <div className="education__heading component__input__heading">
          <h2>Education</h2>
          <button onClick={onClicked}>Submit/Edit</button>
        </div>
        <div className="education__input__container">
          <input type="text" placeholder="University"></input>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="Degree"></input>
          <input type="text" placeholder="Subject"></input>
          <input type="text" placeholder="Year Completed"></input>
        </div>
        <button>Delete</button>
        <button>Add</button>
      </div>
    );
  }
}

export default Education;
