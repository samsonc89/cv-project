import React, { Component } from "react";
import "./experience.css";

class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="experience__container">
        <div className="experience__heading component__input__heading">
          <h2>Experience</h2>
          <button>Submit/Edit</button>
        </div>
        <div className="experience__input__container">
          <input type="text" placeholder="Company"></input>
          <input type="text" placeholder="Position"></input>
          <input type="text" placeholder="From MM/YY"></input>
          <input type="text" placeholder="To MM/YY"></input>
          <div className="experience__input--responsbility__wrapper">
            <input type="text" placeholder="Responsibility"></input>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <button>Delete</button>
        <button>Add</button>
      </div>
    );
  }
}

export default Experience;
