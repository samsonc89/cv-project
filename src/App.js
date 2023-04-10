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
function App() {
  return (
    <div className="app__container">
      <Header />
      <div className="content__container section__padding">
        <div className="input__container">
          <Info />
          <Experience />
          <Education />
        </div>
        <div className="preview__container">
          <Preview />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
