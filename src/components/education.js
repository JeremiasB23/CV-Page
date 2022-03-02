import React from "react";

let inputElements = ["University", "Degree", "Subject"];

export class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        University: "",
        Degree: "",
        Subject: "",
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
