import React from "react";
import "./ContactForm.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Barbe Noire" };

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
    const { pirates } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="container ">
        <h2>I am applying for the team of :</h2>
        <div clasName="selector form-group">
          <label htmlfor="">
            Choose your team :
            <select
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
            >
              {pirates.map((SinglePirate) => (
                <option value={SinglePirate.name}>{SinglePirate.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="firstName form-group">
          <label htlmForm="firstName">
            First Name:
            <input type="text" id="firstName" className="form-control" />
          </label>
        </div>
        <div className="lastName form-group">
          <label>
            Last Name:
            <input type="text" className="form-control" />
          </label>
        </div>
        <div className="questionRealPirate form-group">
          <label>
            Are you a real pirate ?
            <textarea className="form-control" />
          </label>
        </div>
        <div className="email form-group">
          <label>
            email:
            <input
              type="email"
              placeholder="piratedescaraïbes@gmail.com"
              className="form-control"
            />
          </label>
        </div>
        <input
          className="btn btn-info"
          type="submit"
          value="Send me your treasure"
        />
      </form>
    );
  }
}

export default ContactForm;
