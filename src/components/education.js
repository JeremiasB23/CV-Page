import React from "react";

let inputElements = ["University", "Degree", "Subject", "From", "To"];

export class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        University: "",
        Degree: "",
        Subject: "",
        From: "",
        To: "",
    };
  }

  getInputValue(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  onTrigger = event => {
    this.props.patentCallBackEdu(this.state.University);
    this.props.patentCallBackEdu2(this.state.Degree);
    this.props.patentCallBackEdu3(this.state.Subject);
    this.props.patentCallBackEdu4(this.state.From);
    this.props.patentCallBackEdu5(this.state.To);

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onTrigger}>
          {inputElements.map((input, i) => (
            <li key={i}>
              <input
                type="text"
                name={input}
                value={this.state.input}
                placeholder={input}
                onChange={this.getInputValue.bind(this)}
              />
            </li>
          ))}

          <input className="Button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
