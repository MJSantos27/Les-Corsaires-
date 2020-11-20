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
              {/* <option value="Barbe Noire">Barbe Noire</option>
              <option value="Capitaine Thomas">Capitaine Thomas</option>
              <option value="Christopher Chapman">Christopher Chapman</option>
              <option value="John Evans">John Evans</option>
              <option value="Woodes Rogers">Woodes Rogers</option>
              <option value="John Taylor">John Taylor</option>
              <option value="Emmanuel Wynne">Emmanuel Wynne</option>
              <option value="John Rackham">John Rackham</option>
              <option value="Christopher Moody">Christopher Moody</option>
              <option value="Benoît Hubert">Benoît Hubert</option> */}
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
        <input type="submit" value="Send me your treasure" />
      </form>
    );
  }
}

export default ContactForm;
