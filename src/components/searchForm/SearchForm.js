import React, { useRef } from "react";

import { connect } from "react-redux";

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
  const nameInput = useRef(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      props.getSearchResults(e.target[0].value, nameInput.value);
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
          ref={nameInput}
          placeholder="Enter Movie or Tv show name..."
          value={props.searchInputValue ? props.searchInputValue : ""}
          onChange={(e) => props.getSearchSuggestions(e.target.value)}
          onBlur={props.focusOutSearchSuggestions}
        />
        {props.searchInputValue ? (
          <div
            className={classes.iconClose}
            onClick={() => props.deleteSearchSuggestionsInput(nameInput)}
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

const mapStateProps = (state) => {
  return {
    showSuggestions: state.showSuggestions,
    searchInputValue: state.searchInputValue,
  };
};

const mapStateDispatch = (dispatch) => {
  return {
    getSearchResults: (inputValue) => dispatch(getSearchResults(inputValue)),
    focusOutSearchSuggestions: () => dispatch(focusOutSearchSuggestions()),
    getSearchSuggestions: (inputValue) =>
      dispatch(getSearchSuggestions(inputValue)),
    deleteSearchSuggestionsInput: (input) =>
      dispatch(deleteSearchSuggestionsInput(input)),
  };
};

export default connect(mapStateProps, mapStateDispatch)(SearchForm);
