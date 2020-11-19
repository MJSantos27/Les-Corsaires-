import React from "react";
// import { Switch, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import Pirate from "./Pirate";

function PirateList(props) {
  const { pirates } = props;
  return (
    <div className="page-section">
      <div className="container">
        <section className="PirateList row justify-content-center">
          {pirates.map((SinglePirate) => (
            <Pirate
              key={SinglePirate.id}
              name={SinglePirate.name}
              imageUrl={SinglePirate.imageUrl}
              shortBio={SinglePirate.shortBio}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

PirateList.propTypes = {
  pirates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      shortBio: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default PirateList;
