import React, { useState, useEffect } from "react";

import classes from "./Badge.module.scss";

export const Badge = ({ rating }) => {
  const [badgeType, setBadgeType] = useState("badgeSuccess");

  useEffect(() => {
    if (rating > 5 && rating < 8) {
      setBadgeType("badgeWarning");
    } else if (rating <= 5) {
      setBadgeType("badgeDanger");
    } else {
      setBadgeType("badgeSuccess");
    }
  }, [rating]);

  return (
    <span className={`${[classes.badge, classes[badgeType]].join(" ")}`}>
      {" "}
      {rating}{" "}
    </span>
  );
};

export default Badge;
