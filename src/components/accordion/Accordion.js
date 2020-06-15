import React, { useState } from "react";

import AccordionItem from "./accordionItem/AccordionItem";

import classes from "./Accordion.module.scss";

const Accordion = (props) => {
  const [showFirstItem, setShowFirstItem] = useState(false);
  const [showSecondItem, setShowSecondItem] = useState(false);

  const clickHandler = (itemIndex, itemTitle) => {
    if (itemIndex === 0) {
      setShowFirstItem(!showFirstItem);
      setShowSecondItem(false);
    } else {
      setShowFirstItem(false);
      setShowSecondItem(!showSecondItem);
    }

    // Stop youtube video on close
    if (itemTitle === "Trailers") {
      Array.from(document.querySelectorAll("iframe")).forEach((e) => {
        e.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      });
    }
  };

  let accordionItems = props.elements.map((element, index) => {
    return (
      <AccordionItem
        key={element.id + index}
        show={index === 0 ? showFirstItem : showSecondItem}
        index={index}
        clickHandler={clickHandler}
        title={element.title}
        body={element.body}
      />
    );
  });

  return <div className={`${classes.container}`}>{accordionItems}</div>;
};
export default Accordion;
