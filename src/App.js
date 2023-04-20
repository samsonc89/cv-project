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
    this.state = { firstName: "", lastName: "", title: "" };

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
  }

  firstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }
  lastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }
  titleChange(e) {
    this.setState({ title: e.target.value });
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
              onTitleChanged={this.titleChange}
            />
            <Experience />
            <Education />
          </div>
          <div className="preview__container">
            <Preview personalInfo={this.state} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
