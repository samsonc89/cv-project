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
              <div>Company: {personalInfo.experience[0].company}</div>
              <div>Position: {personalInfo.experience[0].position}</div>
              <div>From: {personalInfo.experience[0].from}</div>
              <div>To: {personalInfo.experience[0].to}</div>
            </div>
            <div className="preview__education">
              <div>University: {personalInfo.education[0].university}</div>
              <div>City: {personalInfo.education[0].city}</div>
              <div>Degree: {personalInfo.education[0].degree}</div>
              <div>Subject: {personalInfo.education[0].subject}</div>
              <div>Year: {personalInfo.education[0].year}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
