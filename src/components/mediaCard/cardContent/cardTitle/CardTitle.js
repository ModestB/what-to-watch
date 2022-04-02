import React, { useState, useEffect } from "react";

import useRoute from "../../../../hooks/useRoute";

import classes from "./CardTitle.module.scss";

const substringLength = 30;

export const CardTitle = ({ showTitle }) => {
  const { isSinglePage } = useRoute();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (isSinglePage) {
      setTitle(showTitle);
    } else {
      setTitle(
        showTitle.length > substringLength
          ? showTitle.substring(0, substringLength) + "..."
          : showTitle
      );
    }
  }, [showTitle, isSinglePage]);

  return <div className={`${classes.title}`}>{title}</div>;
};

export default CardTitle;
