import React, { Component } from "react";
import "./preview.css";

class Preview extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="preview__content-container">
        <div className="preview__heading">
          <h1>{personalInfo.firstName + " " + personalInfo.lastName}</h1>
          <h2>{personalInfo.title}</h2>
        </div>
        <div className="preview__content">
          <div className="preview__personal-info">
            <h3>
              Address:
              <span>
                <p className="preview__personal-info--details--text">
                  {" "}
                  {personalInfo.address}
                </p>
              </span>
            </h3>
            <h3>
              Phone:
              <span>
                <p className="preview__personal-info--details--text">
                  {" "}
                  {personalInfo.phone}
                </p>
              </span>
            </h3>

            <h3>
              Email:
              <span>
                <p className="preview__personal-info--details--text">
                  {" "}
                  {personalInfo.email}
                </p>
              </span>
            </h3>
            <h3>LinkedIn</h3>
          </div>
          <div className="preview__details">
            <div className="preview__section">{personalInfo.description}</div>
            <div className="preview__experience">
              <p>Company: {personalInfo.experience[0].company}</p>
              <p>Position: {personalInfo.experience[0].position}</p>
              <p>From: {personalInfo.experience[0].from}</p>
              <p>To: {personalInfo.experience[0].to}</p>
            </div>
            <div className="preview__education">
              <p>University: {personalInfo.education[0].university}</p>
              <p>City: {personalInfo.education[0].city}</p>
              <p>Degree: {personalInfo.education[0].degree}</p>
              <p>Subject: {personalInfo.education[0].subject}</p>
              <p>Year: {personalInfo.education[0].year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
