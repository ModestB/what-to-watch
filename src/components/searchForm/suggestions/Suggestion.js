import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Action Types
import { getSearchResults } from "../../../store/actions/actions";

import classes from "./Suggestions.module.scss";

import ReactHtmlParser from "react-html-parser";

export const Suggestion = ({ suggestion }) => {
  const searchInputValue = useSelector((state) => state.search.inputValue);
  const [name, setName] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    switch (suggestion.media_type) {
      case "tv":
        setName(suggestion.original_name);
        break;
      case "person":
        setName(suggestion.name);
        break;
      default:
        setName(suggestion.original_title);
    }
  }, [suggestion, searchInputValue]);

  useEffect(() => {
    let nameToDisplay = name.toLowerCase();

    if (name.toLowerCase().indexOf(searchInputValue) >= 0) {
      nameToDisplay = name
        .toLowerCase()
        .split(searchInputValue)
        .join(`<span>${searchInputValue}</span>`);
    }

    setDisplayedName(nameToDisplay);
  }, [name, searchInputValue]);

  function mouseHoverHandler(e) {
    let readySuggestion = document.querySelector(
      ".suggestions-container .suggestion.ready"
    );
    if (readySuggestion) {
      readySuggestion.classList.remove("ready");
    }
    e.currentTarget.classList.add("ready");
  }

  return (
    <div
      key={suggestion.id}
      className={`${classes.item} suggestion`}
      onMouseOver={(e) => mouseHoverHandler(e)}
      onMouseDown={() => dispatch(getSearchResults(name))}
      data-text={name.toLowerCase()}
    >
      {ReactHtmlParser(`<p>${displayedName}</p>`)}
    </div>
  );
};

export default Suggestion;
