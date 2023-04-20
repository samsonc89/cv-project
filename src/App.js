import React, { Component } from "react";
import { Main, Footer, Header } from "./components/index";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app__container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
