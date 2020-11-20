import React, { Component } from "react";
import "./Slider.css";
import axios from "axios";
import Carousel from "react-elastic-carousel";
class Slider extends Component {
  state = {
    pirates: [],
  };

  componentDidMount = () => {
    this.fetchPirets();
  };

  fetchPirets = () => {
    axios
      .get("https://my-json-server.typicode.com/bhubr/pirates-api/pirates")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          pirates: data,
        });
      });
  };

  render() {
    const { pirates } = this.state;
    return (
      <div className="Pirate">
        <Carousel>
          {pirates.map((pirate) => (
            <img
              key={pirate.id}
              src={pirate.imageUrl}
              alt={pirate.name}
              // key={pirate.id}
              // imageUrl={pirate.imageUrl}
              // name={pirate.name}
              // shortBio={pirate.shortBio}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
