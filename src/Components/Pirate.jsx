import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Pirate.css";

function Pirate(props) {
  const { name, imageUrl, shortBio, id } = props;
  return (
    <div className="Pirate col-md-6 col-lg-4 md-5">
      <img className="card-img-top" src={imageUrl} alt={name} />
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{shortBio}</p>
      <Link to={`/Pirates/${id}`} className="btn btn-info ">
        More information
      </Link>
    </div>
  );
}

Pirate.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  shortBio: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Pirate;
