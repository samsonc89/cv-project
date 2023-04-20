import React, { Component } from "react";
import "./info.css";

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onLastNameChanged, onFirstNameChanged, onTitleChanged } =
      this.props;

    return (
      <div className="info__container">
        <div className="info__heading component__input__heading">
          <h2>Personal Info</h2>
        </div>
        <div className="info__input__container">
          <input
            type="text"
            placeholder="First Name"
            onChange={onFirstNameChanged}
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            onChange={onLastNameChanged}
          ></input>
          <input
            type="text"
            placeholder="Title"
            onChange={onTitleChanged}
          ></input>
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
