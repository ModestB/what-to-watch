import React from "react";

import CloseIcon from "../../../icons/js/Close";

import classes from "./AccordionItem.module.scss";

export const AccordionItem = (props) => {
  return (
    <section className={`${classes.item}`}>
      <header
        className={`${classes.header} ${props.show ? classes.active : ""}`}
        onClick={() => props.clickHandler(props.index, props.title)}
      >
        <h2>
          <div className={`${classes.title}`}>
            <p>{props.title}</p>
          </div>
        </h2>
        <div className={`${classes.headerOverlay}`}></div>
      </header>

      <div
        className={`${classes.body}  ${
          props.index === 0 ? classes.bodyLeft : classes.bodyRight
        } ${props.show ? classes.active : ""}`}
      >
        <CloseIcon
          className={`${classes.close} icon-close icon-close--dark`}
          onClick={() => props.clickHandler(props.index, props.title)}
          width="20px"
          height="20px"
        />
        <div>{props.body}</div>
      </div>
    </section>
  );
};

export default AccordionItem;
