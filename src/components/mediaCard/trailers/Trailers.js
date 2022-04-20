import React from "react";
import { useSelector } from "react-redux";

import Trailer from "./trailer/Trailer";

import classes from "./Trailers.module.scss";

const Trailers = (props) => {
  const trailers = useSelector((state) => state.extraInfo.trailers);

  return (
    <div className={`${classes.trailers} customScroll`}>
      {trailers.length ? (
        trailers.map((element) => (
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
