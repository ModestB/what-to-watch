import React from "react";

import useRoute from "../../../hooks/useRoute";

import Accordion from "../../accordion/Accordion";
import classes from "./CardFooter.module.scss";

const CardFooter = (props) => {
  const { isSinglePage } = useRoute();

  let content = null;

  if (isSinglePage) {
    content = (
      <footer className={`${classes.footer}`}>
        <Accordion elements={props.elements} />
      </footer>
    );
  }
  return content;
};

export default CardFooter;
