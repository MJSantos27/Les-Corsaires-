import React, { Component } from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Je postule pour l équipe de : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choisissez votre équipe :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
        <input type="submit" value="Send" />
        <div className="pirate identity">
          <label>
            first name:
            <input type="text" />
          </label>
          <br />
          <label>
            last name:
            <input type="text" />
          </label>
          <label>
            your message:
            <textarea />
          </label>
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
