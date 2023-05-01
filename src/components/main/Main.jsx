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
      experience: [
        {
          company: "",
          position: "",
        },
      ],
    };

    this.onChange = this.onChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleExperienceChange(e) {
    this.setState((prevState) => {
      //map new State using previous state
      const newExperience = prevState.experience.map((experienceItem) => {
        //return all properties in the exp item except the target one that needs to be changed
        return { ...experienceItem, [e.target.name]: e.target.value };
      });
      //set new state with new array of experiences
      return { ...prevState, experience: [...newExperience] };
    });
    //  this.setState(prevState =>({experience: prevState.experience.map(eachItem => eachItem[e.target.name]: e.target.value)}))
  }

  handleClick() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="main__container">
        <div className="content__container section__padding">
          <div className="input__container">
            <Info onChanged={this.onChange} />
            <Experience onChanged={this.handleExperienceChange} />
            <Education onClicked={this.handleClick} />
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
