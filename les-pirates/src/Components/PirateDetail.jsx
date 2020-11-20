import React from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PirateDetail.css";

function PirateDetail(props) {
  const { match, pirates } = props;
  const idPirate = match.params.id;
  return (
    <div className="PirateDetail">
      {pirates
        .filter((singlePirate) => singlePirate.id === parseInt(idPirate))
        .map((filteredId) => (
          <div className={filteredId.name}>
            <h2>
              {filteredId.name}{" "}
              {filteredId.nickname === "" ? "" : `(${filteredId.nickname})`}{" "}
            </h2>
            <p className="">Year of birth : {filteredId.yearBirth}</p>
            <img className="" src={filteredId.imageUrl} alt={filteredId.name} />
            <p className="">{filteredId.shortBio}</p>
            <h2>We are looking for :</h2>
            <p className="">{filteredId.search}</p>
            <h2>Advantages :</h2>
            <ul>
              {filteredId.advantages.map((advantage) => (
                <li>{advantage}</li>
              ))}
            </ul>
            <Link to="/Contact" className="btn btn-info ">
              APPLY
            </Link>
          </div>
        ))}
    </div>
  );
}

PirateDetail.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  pirates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      shortBio: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default withRouter(PirateDetail);
