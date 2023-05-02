import React, { Component } from "react";
import "./experience.css";

class Experience extends Component {
  constructor() {
    super();

    this.addExperienceInput = this.addExperienceInput.bind(this);
  }
  addExperienceInput() {}
  render() {
    const { onChanged, onClicked } = this.props;
    return (
      <div className="experience__container">
        <div className="experience__heading component__input__heading">
          <h2>Experience</h2>
        </div>
        <div className="experience__input__container">
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="from"
            placeholder="From MM/YY"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="to"
            placeholder="To MM/YY"
            onChange={onChanged}
          ></input>
          <div className="experience__input--responsbility__wrapper">
            <input type="text" placeholder="Responsibility"></input>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <button>Delete</button>
        <button onClick={onClicked}>Add</button>
      </div>
    );
  }
}

export default Experience;
