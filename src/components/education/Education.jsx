import React, { Component } from "react";
import "./education.css";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    const { onChanged, onClicked } = this.props;
    return (
      <div className="education__container">
        <div className="education__heading component__input__heading">
          <h2>Education</h2>
          <button onClick={onClicked}>Submit/Edit</button>
        </div>
        <div className="education__input__container">
          <input
            type="text"
            name="university"
            placeholder="University"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="year"
            placeholder="Year Completed YYYY"
            onChange={onChanged}
          ></input>
        </div>
        <button>Delete</button>
        <button>Add</button>
      </div>
    );
  }
}

export default Education;
