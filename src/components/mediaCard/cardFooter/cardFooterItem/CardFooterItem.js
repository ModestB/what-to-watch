import React from "react";

import classes from "./CardFooterItem.module.scss";

export const CardFooterItem = ({
  show,
  clickHandler,
  title,
  index,
  closeHandler,
  children,
}) => {
  return (
    <section className={`${classes.item}`}>
      <header
        className={[classes.header, show ? classes.active : ""].join(" ")}
        onClick={() => clickHandler()}
      >
        <h2>
          <div className={`${classes.title}`}>
            <p>{title}</p>
          </div>
        </h2>
        <div className={`${classes.headerOverlay}`}></div>
      </header>

      <div
        className={[
          classes.body,
          index === 0 ? classes.bodyLeft : classes.bodyRight,
          show ? classes.active : "",
        ].join(" ")}
      >
        <div>{children}</div>
      </div>
    </section>
  );
};

export default CardFooterItem;
