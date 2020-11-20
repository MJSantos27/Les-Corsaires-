import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

function PirateDetail(props) {
  const { match, pirates } = props;
  const idPirate = match.params.id;
  return (
    <div className="PirateDetail">
      {pirates.filter((singlePirate) => singlePirate.id === idPirate)}
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
