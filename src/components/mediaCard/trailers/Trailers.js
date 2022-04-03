import React from "react";
import { useSelector } from "react-redux";

import Trailer from "./trailer/Trailer";

import classes from "./Trailers.module.scss";

const Trailers = (props) => {
  const trailersData = useSelector((state) => state.trailersData);

  return (
    <div className={`${classes.trailers} customScroll`}>
      {trailersData.length ? (
        trailersData.map((element) => (
          <Trailer
            key={element.id}
            youtubeKey={element.key}
            title={element.name}
          />
        ))
      ) : (
        <h6>No Trailers</h6>
      )}
    </div>
  );
};

export default Trailers;
