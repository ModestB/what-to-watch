import React, { useState, useEffect } from "react";

import useRoute from "../../../../hooks/useRoute";

import classes from "./CardText.module.scss";

const substringLength = 70;

export const CardText = ({ showOverview }) => {
  const { isSinglePage } = useRoute();
  const [text, setText] = useState("");

  useEffect(() => {
    if (isSinglePage) {
      setText(showOverview);
    } else {
      setText(
        showOverview.length > substringLength
          ? showOverview.substring(0, substringLength) + "..."
          : showOverview
      );
    }
  }, [showOverview, isSinglePage]);

  return (
    <p
      className={[
        classes.description,
        isSinglePage ? classes.descriptionOverview : "",
      ].join(" ")}
    >
      {text}
    </p>
  );
};

export default CardText;
