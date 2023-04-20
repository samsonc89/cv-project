import React, { Component } from "react";
import "./info.css";

class Info extends Component {
  render() {
    const { onChanged } = this.props;

    return (
      <div className="info__container">
        <div className="info__heading component__input__heading">
          <h2>Personal Info</h2>
        </div>
        <div className="info__input__container">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={onChanged}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={onChanged}
          ></input>
          <input type="text" name="linkedIn" placeholder="LinkedIn"></input>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={onChanged}
          ></input>
          <input type="text" placeholder="Description"></input>
        </div>
      </div>
    );
  }
}

export default Info;
