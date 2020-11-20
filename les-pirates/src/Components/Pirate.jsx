import React from "react";
import PropTypes from "prop-types";

function Pirate(props) {
  const { name, imageUrl, shortBio } = props;
  return (
    <div className="Pirate col-md-6 col-lg-4 md-5">
      <img className="card-img-top" src={imageUrl} alt={name} />
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{shortBio}</p>
    </div>
  );
}

Pirate.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  shortBio: PropTypes.string.isRequired,
};

export default Pirate;
