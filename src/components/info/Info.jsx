import React, { Component } from "react";
import "./info.css";

class Info extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="info__container">
        <div className="info__heading component__input__heading">
          <h2>Personal Info</h2>
          <button>Submit/Edit</button>
        </div>
        <div className="info__input__container">
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Title"></input>
          <input type="text" placeholder="Phone"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="LinkedIn"></input>
          <input type="text" placeholder="Address"></input>
          <input type="text" placeholder="Description"></input>
        </div>
      </div>
    );
  }
}

export default Info;
