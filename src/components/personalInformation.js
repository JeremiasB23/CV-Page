import React from "react";

let inputElements = ["FirstName", "SecondName", "Age", "Country"];

export class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      SecondName: "",
      Age: "",
      Country: "",
      image: "",
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
    this.props.parentCallback(this.state.FirstName);
    this.props.parentCallback2(this.state.SecondName);
    this.props.parentCallback3(this.state.Age);
    this.props.parentCallback4(this.state.Country);
    this.props.parentCallback5(this.state.image);

    event.preventDefault();
  };

  onImageChange = event => {
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({image: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
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
          <input 
          type="file" 
          onChange={this.onImageChange} 
          className="filetype" 
          id="group_image" 
          />
                    
          <input className="Button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
