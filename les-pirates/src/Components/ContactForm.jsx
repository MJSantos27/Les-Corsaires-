import React from "react";

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
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>I am applying for the team of :</h2>
        <div clasName="selector">
          <label>
            Choose your team :
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Barbe Noire">Barbe Noire</option>
              <option value="Capitaine Thomas">Capitaine Thomas</option>
              <option value="Christopher Chapman">Christopher Chapman</option>
              <option value="John Evans">John Evans</option>
              <option value="Woodes Rogers">Woodes Rogers</option>
              <option value="John Taylor">John Taylor</option>
              <option value="Emmanuel Wynne">Emmanuel Wynne</option>
              <option value="John Rackham">John Rackham</option>
              <option value="Christopher Moody">Christopher Moody</option>
              <option value="Benoît Hubert">Benoît Hubert</option>
            </select>
          </label>
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
        <input type="submit" value="Send me your treasure" />
      </form>
    );
  }
}

export default ContactForm;
