import React from "react";
import { useSelector } from "react-redux";

import Suggestion from "./Suggestion";

import classes from "./Suggestions.module.scss";

export const Suggestions = () => {
  const showSuggestions = useSelector((state) => state.showSuggestions);
  const suggestionsResults = useSelector((state) => state.suggestionsResults);
  const searchInputValue = useSelector((state) => state.searchInputValue);

  return (
    <div
      className={`${classes.container} ${
        showSuggestions ? classes.show : ""
      } suggestions-container customScroll`}
      id="suggestionsContainer"
    >
      {suggestionsResults.map((suggestion) => (
        <Suggestion
          suggestion={suggestion}
          searchInputValue={searchInputValue}
        />
      ))}
    </div>
  );
};

export default Suggestions;
