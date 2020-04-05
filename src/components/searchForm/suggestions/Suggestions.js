import React from "react";

import { connect } from "react-redux";

// Action Types
import { getSearchResults } from "../../../store/actions/actions";

import classes from "./Suggestions.module.scss";

import ReactHtmlParser from "react-html-parser";

export const Suggestions = (props) => {
  let suggestions = null;
  if (props.suggestionsResults) {
    suggestions = props.suggestionsResults.map((element) => {
      let name = "";
      let editedName = "";
      switch (element.media_type) {
        case "tv":
          name = element.original_name;
          break;
        case "person":
          name = element.name;
          break;
        default:
          name = element.original_title;
      }
      if (name.toLowerCase().indexOf(props.searchInputValue) >= 0) {
        editedName = name
          .toLowerCase()
          .split(props.searchInputValue)
          .join(`<span>${props.searchInputValue}</span>`);
      } else {
        editedName = name.toLowerCase();
      }
      return (
        <div
          key={element.id}
          className={`${classes.item} suggestion`}
          onMouseOver={(e) => mouseHoverHandler(e)}
          onMouseDown={() => props.getSearchResults(name)}
          data-text={name.toLowerCase()}
        >
          {ReactHtmlParser(`<p>${editedName}</p>`)}
        </div>
      );
    });
  }

  return (
    <div
      className={`${classes.container} ${
        props.showSuggestions ? classes.show : ""
      } suggestions-container customScroll`}
      id="suggestionsContainer"
    >
      {suggestions}
    </div>
  );
};

function mouseHoverHandler(e) {
  let readySuggestion = document.querySelector(
    ".suggestions-container .suggestion.ready"
  );
  if (readySuggestion) {
    readySuggestion.classList.remove("ready");
  }
  e.currentTarget.classList.add("ready");
}

const mapStateProps = (state) => {
  return {
    showSuggestions: state.showSuggestions,
    suggestionsResults: state.suggestionsResults,
    searchInputValue: state.searchInputValue,
  };
};

const mapStateDispatch = (dispatch) => {
  return {
    getSearchResults: (inputValue) => dispatch(getSearchResults(inputValue)),
  };
};

export default connect(mapStateProps, mapStateDispatch)(Suggestions);
