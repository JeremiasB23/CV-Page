import React from "react";

let inputElements = ["Position", "Company", "Duration", "From", "To"];

export class JobExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Position: "",
      Company: "",
      Duration: "",
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
    this.props.parentCallExp(this.state.Position);
    this.props.parentCallExp2(this.state.Company);
    this.props.parentCallExp3(this.state.Duration);
    this.props.parentCallExp4(this.state.From);
    this.props.parentCallExp5(this.state.To);

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
