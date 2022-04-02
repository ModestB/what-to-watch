import React, { useState, useEffect } from "react";

import classes from "./CardContent.module.scss";

import CardTitle from "./cardTitle/CardTitle";
import CardText from "./cardText/CardText";

export const CardContent = ({ showTitle, showOverview, showDate }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const showFullDate = new Date(showDate);
    setDate(showFullDate.getFullYear());
  }, [showDate]);

  return (
    <div className={`${classes.container}`}>
      <CardTitle showTitle={showTitle} />
      <CardText showOverview={showOverview} />
      <p className={`${classes.date}`}>{date}</p>
    </div>
  );
};

export default CardContent;
