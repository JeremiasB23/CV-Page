import React from "react";
import { Education } from "./education";
import { JobExperience } from "./jobExperience";
import { PersonalInformation } from "./personalInformation";

export class ContentDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: null,
      SecondName: null,
      Age: null,
      Country: null,
      Position: null,
      Company: null,
      Duration: null,
      University: null,
      Degree: null,
      Subject: null,
    };
  }

  handleCallback = childData => {
    this.setState({ FirstName: childData });
  };

  handleCallback2 = childData2 => {
    this.setState({ SecondName: childData2 });
  };

  handleCallback3 = childData3 => {
    this.setState({ Age: childData3 });
  };

  handleCallback4 = childData4 => {
    this.setState({ Country: childData4 });
  };

  handleCallbackExp = childDataExp => {
    this.setState({ Position: childDataExp });
  };

  handleCallbackExp2 = childDataExp2 => {
    this.setState({ Company: childDataExp2 });
  };

  handleCallbackExp3 = childDataExp3 => {
    this.setState({ Duration: childDataExp3 });
  };

  handleCallbackEduc = childDataEduc => {
    this.setState({ University: childDataEduc });
  };

  handleCallbackEduc2 = childDataEduc2 => {
    this.setState({ Degree: childDataEduc2 });
  };

  handleCallbackEduc3 = childDataEduc3 => {
    this.setState({ Subject: childDataEduc3 });
  };

  render() {
    const { FirstName, SecondName, Age, Country } = this.state;
    const { Position, Company, Duration } = this.state;
    const { University, Degree, Subject } = this.state;

    return (
      <div>
        <header className="TopBar">
          <h1>CV-APLICATION</h1>
        </header>
        <section className="inputsGetValueSectionDisplay">
          <section className="PersonalInformation">
            <h1>PersonalInformation</h1>

            <PersonalInformation
              parentCallback={this.handleCallback}
              parentCallback2={this.handleCallback2}
              parentCallback3={this.handleCallback3}
              parentCallback4={this.handleCallback4}
            />
          </section>
          <section className="jobExperience">
            <h1>Job Experience</h1>
            <JobExperience
              parentCallExp={this.handleCallbackExp}
              parentCallExp2={this.handleCallbackExp2}
              parentCallExp3={this.handleCallbackExp3}
            />
          </section>
          <section className="education">
            <h1>Education</h1>
            <Education
              patentCallBackEdu={this.handleCallbackEduc}
              patentCallBackEdu2={this.handleCallbackEduc2}
              patentCallBackEdu3={this.handleCallbackEduc3}
            />
          </section>
        </section>
        <footer>
          <section className="displayInputsTopBar">
            <h1>Your CV</h1>
          </section>
          <section className="displayInputsPersonalInformation">
            <section>
              <h2>Your name</h2>
              {FirstName}
            </section>
            <section>
              <h2>Your SecondName</h2>
              {SecondName}
            </section>
            <section>
              <h2>Your Age</h2>
              {Age}
            </section>
            <section>
              <h2>Your Country</h2>
              {Country}
            </section>
          </section>
          {/*space*/}
          <section className="displayInputsJobExperience">
            <section>
              <h2>Your Position</h2>
              {Position}
            </section>
            <section>
              <h2>Company Name</h2>
              {Company}
            </section>
            <section>
              <h2>The Duration</h2>
              {Duration}
            </section>
          </section>

          <section className="displayInputsEducation">
            <section>
              <h2>University</h2>
              {University}
            </section>
            <section>
              <h2>Degree</h2>
              {Degree}
            </section>
            <section>
              <h2>Subject</h2>
              {Subject}
            </section>
          </section>
        </footer>
      </div>
    );
  }
}
