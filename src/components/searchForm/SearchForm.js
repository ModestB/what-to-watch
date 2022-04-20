import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Action Types
import {
  getSearchResults,
  focusOutSearchSuggestions,
  getSearchSuggestions,
  deleteSearchSuggestionsInput,
} from "../../store/actions/actions";

// Import CSS
import classes from "./SearchForm.module.scss";

import Suggestions from "./suggestions/Suggestions";
import CloseIcon from "../../icons/js/Close";

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const searchInputValue = useSelector((state) => state.search.inputValue);

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      dispatch(getSearchResults(e.target[0].value));
    }
  };

  return (
    <form
      className={`${classes.form}`}
      onSubmit={formSubmitHandler}
      id="searchForm"
    >
      <div className={`${classes.inputWrapper}`} id="searchNameInput">
        <input
          className={`${classes.input}`}
          type="text"
          ref={searchInput}
          placeholder="Enter Movie or Tv show name..."
          value={searchInputValue ? searchInputValue : ""}
          onChange={(e) => dispatch(getSearchSuggestions(e.target.value))}
          onBlur={() => dispatch(focusOutSearchSuggestions())}
        />
        {searchInputValue ? (
          <div
            className={classes.iconClose}
            onClick={() => dispatch(deleteSearchSuggestionsInput(searchInput))}
          >
            <CloseIcon fill="#616161" width="15px" height="15px" />
          </div>
        ) : null}
      </div>
      <button
        className={`${classes.btn} btn btn--big btn--primary`}
        type="submit"
      >
        Find
      </button>
      <Suggestions />
    </form>
  );
};

export default SearchForm;
