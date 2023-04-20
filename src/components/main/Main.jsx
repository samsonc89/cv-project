import React, { Component } from "react";
import "./main.css";
import { Info, Experience, Education, Preview } from "../index";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      address: "",
      email: "",
      linkedIn: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="main__container">
        <div className="content__container section__padding">
          <div className="input__container">
            <Info onChanged={this.onChange} />
            <Experience />
            <Education />
          </div>
          <div className="preview__container">
            <Preview personalInfo={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
