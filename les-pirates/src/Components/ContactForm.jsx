import React, { Component } from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Anne Bonny" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("I am applying for the team of : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>I am applying for the team of :</h2>
        <div clasName="selector">
          <label>
            Choose your team :
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Anne Bonny">Anne Bonny</option>
              <option value="Bartholomew Roberts">Bartholomew Roberts</option>
              <option value="Benjamin Hornigold">Benjamin Hornigold</option>
              <option value="Calico Jack">Calico Jack</option>
            </select>
          </label>
          <input type="submit" value="Send" />
        </div>
        <div className="firstName">
          <label>
            first name:
            <input type="text" />
          </label>
        </div>
        <div className="lastName">
          <label>
            last name:
            <input type="text" />
          </label>
        </div>
        <div className="questionRealPirate">
          <label>
            Are you a real pirate ?
            <textarea />
          </label>
        </div>
        <div className="email">
          <label>
            email:
            <input type="text" placeholder="piratedescaraïbes@gmail.com" />
          </label>
        </div>
      </form>
    );
  }
}

export default ContactForm;
