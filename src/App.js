import React, { Component } from "react";
import {
  Education,
  Experience,
  Footer,
  Header,
  Info,
  Preview,
} from "./components/index";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "" };

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }
  lastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.firstName, this.state.lastName);
  }

  render() {
    return (
      <div className="app__container">
        <Header />
        <div className="content__container section__padding">
          <div className="input__container">
            <Info
              onFirstNameChanged={this.firstNameChange}
              onLastNameChanged={this.lastNameChange}
            />
            <Experience />
            <Education />
          </div>
          <div className="preview__container">
            <Preview
              firstName={this.state.firstName}
              lastName={this.state.lastName}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
