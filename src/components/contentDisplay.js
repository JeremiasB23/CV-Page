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
      Image: null,
      Position: null,
      Company: null,
      Duration: null,
      From: null,
      To: null,
      University: null,
      Degree: null,
      Subject: null,
      FromE: null,
      ToE: null,
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

  handleCallback5 = childData5 => {
    this.setState({ Image: childData5 });
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
  
  handleCallbackExp4 = childDataExp4 => {
    this.setState({ From: childDataExp4 });
  };

  handleCallbackExp5 = childDataExp5 => {
    this.setState({ To: childDataExp5 });
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

  handleCallbackEduc4 = childDataEduc4 => {
    this.setState({ FromE: childDataEduc4 });
  };

  handleCallbackEduc5 = childDataEduc5 => {
    this.setState({ ToE: childDataEduc5 });
  };

  render() {
    const { FirstName, SecondName, Age, Country, Image } = this.state;
    const { Position, Company, Duration, From, To } = this.state;
    const { University, Degree, Subject, FromE, ToE } = this.state;

    return (
      <div>
        <header className="TopBar">
          <h1>CV-APLICATION</h1>
        </header>
        <section className="inputsGetValueSectionDisplay">
          <section className="PersonalInformation">
            <h1>Personal Information</h1>

            <PersonalInformation
              parentCallback={this.handleCallback}
              parentCallback2={this.handleCallback2}
              parentCallback3={this.handleCallback3}
              parentCallback4={this.handleCallback4}
              parentCallback5={this.handleCallback5}
            />
          </section>
          <section className="jobExperience">
            <h1>Job Experience</h1>
            <JobExperience
              parentCallExp={this.handleCallbackExp}
              parentCallExp2={this.handleCallbackExp2}
              parentCallExp3={this.handleCallbackExp3}
              parentCallExp4={this.handleCallbackExp4}
              parentCallExp5={this.handleCallbackExp5}
            />
          </section>
          <section className="education">
            <h1>Education</h1>
            <Education
              patentCallBackEdu={this.handleCallbackEduc}
              patentCallBackEdu2={this.handleCallbackEduc2}
              patentCallBackEdu3={this.handleCallbackEduc3}
              patentCallBackEdu4={this.handleCallbackEduc4}
              patentCallBackEdu5={this.handleCallbackEduc5}
            />
          </section>
        </section>
        <footer>
          <section className="displayInputsTopBar">
            <h1>Curriculum</h1>
          </section>
          <section className="displayInputsPersonalInformation">
            <section className="aux">
              <h1>Personal Information</h1>
              <section className="persInfo">
                <section>
                  <h2>NAME:</h2>
                  <h3>{FirstName}</h3>
                </section>
                <section>
                  <h2>S-NAME:</h2>
                  <h3>{SecondName}</h3>
                </section>
                <section>
                  <h2>AGE:</h2>
                  <h3>{Age}</h3>
                </section>
                <section>
                  <h2>COUNTRY:</h2>
                  <h3>{Country}</h3>
                </section>
              </section>
            </section>
            <img src={Image} />
          </section>
          {/*space*/}
          <section className="displayInputsJobExperience">
            <h1>Job Experiences</h1>
            <section className="persInfo">
              <section>
                <h2>POSITION:</h2>
                <h3>{Position}</h3>
              </section>
              <section>
                <h2>COMPANY:</h2>
                <h3>{Company}</h3>
              </section>
              <section>
                <h2>DURATION:</h2>
                <h3>{Duration}</h3>
              </section>
              <section>
                <h2>FROM:</h2>
                <h3>{From}</h3>
              </section>
              <section>
                <h2>TO:</h2>
                <h3>{To}</h3>
              </section>
            </section>
          </section>

          <section className="displayInputsEducation">
            <h1>Education</h1>
            <section className="persInfo">
              <section>
                <h2>UNIVERSITY:</h2>
                <h3>{University}</h3>
              </section>
              <section>
                <h2>DEFREE:</h2>
                <h3>{Degree}</h3>
              </section>
              <section>
                <h2>SUBJECT:</h2>
                <h3>{Subject}</h3>
              </section>
              <section>
                <h2>FROM:</h2>
                <h3>{FromE}</h3>
              </section>
              <section>
                <h2>TO:</h2>
                <h3>{ToE}</h3>
              </section>
            </section>
          </section>
        </footer>
      </div>
    );
  }
}
