import React, { Component } from "react";

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

import Suggestions from "../../components/searchForm/suggestions/Suggestions";
import CloseIcon from "../../icons/js/Close";

export class SearchForm extends Component {
  formSubmitHandler = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      this.props.getSearchResults(e.target[0].value, this.nameInput.value);
    }
  };

  render() {
    return (
      <form
        className={`${classes.form}`}
        onSubmit={this.formSubmitHandler}
        id="searchForm"
      >
        <div className={`${classes.inputWrapper}`} id="searchNameInput">
          <input
            className={`${classes.input}`}
            type="text"
            ref={(ref) => {
              this.nameInput = ref;
            }}
            placeholder="Enter Movie or Tv show name..."
            value={
              this.props.searchInputValue ? this.props.searchInputValue : ""
            }
            onChange={(e) => this.props.getSearchSuggestions(e.target.value)}
            onBlur={this.props.focusOutSearchSuggestions}
          />
          {this.props.searchInputValue ? (
            <div
              className={classes.iconClose}
              onClick={() =>
                this.props.deleteSearchSuggestionsInput(this.nameInput)
              }
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
  }
}

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

export default connect(
  mapStateProps,
  mapStateDispatch
)(SearchForm);
