import React, { Component } from "react";

import { connect } from 'react-redux';

// Action Types
import {
  getSearchResults,
  focusOutSearchSuggestions,
  getSearchSuggestions,
  deleteSearchSuggestionsInput,
  clearSearchSuggestionTimeout 
} from '../../store/actions/actions';

// Bootsrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import CSS
import classes from './SearchForm.module.scss';

import Suggestions from '../../components/searchForm/suggestions/Suggestions';
import CloseIcon from '../../icons/js/Close';

class SearchForm extends Component {
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.clearSearchSuggestionTimeout()
    if(e.target[0].value){
      this.props.getSearchResults(e.target[0].value, this.nameInput.value);
    }
  }

  render () {
    return (
      <Form 
        className='d-flex position-relative pt-4 pb-3`'
        onSubmit={this.formSubmitHandler}
        id="searchForm"
      >
        <Form.Group 
          className="position-relative flex-grow-1" 
          controlId="searchNameInput"
        >
          <Form.Control 
            className={`${classes.input} pr-4`} 
            type="text" 
            ref={(ref) => { this.nameInput = ref; }} 
            placeholder="Enter Movie or Tv show name..." 
            value={this.props.searchInputValue ? this.props.searchInputValue : ""}
            onChange={(e) => this.props.getSearchSuggestions(e.target.value)}
            onBlur={this.props.focusOutSearchSuggestions}
          />
          {this.props.searchInputValue ? 
            <div 
              className={classes.iconClose}
              onClick={ () =>   this.props.deleteSearchSuggestionsInput(this.nameInput)}
            >
              <CloseIcon 
                fill="#616161" 
                width="15px" 
                height="15px"
              />
            </div>
            : null
          }
          
        </Form.Group>
        <Button 
          className='btn btn--big btn--priamry ml-2'
          variant="primary" 
          type="submit"
        >
          Find
        </Button>
        <Suggestions />      
      </Form>
    )
  }
}

const mapStateProps = state => {
  return {
    showSuggestions: state.showSuggestions,
    searchInputValue: state.searchInputValue
  }
}

const mapStateDispatch = dispatch => {
  return {
    getSearchResults: (inputValue) => dispatch(getSearchResults(inputValue)),
    focusOutSearchSuggestions: () => dispatch(focusOutSearchSuggestions()),
    getSearchSuggestions: (inputValue) => dispatch(getSearchSuggestions(inputValue)),
    deleteSearchSuggestionsInput: (input) => dispatch(deleteSearchSuggestionsInput(input)),
    clearSearchSuggestionTimeout : () => dispatch(clearSearchSuggestionTimeout())
  }
}

export default connect(mapStateProps, mapStateDispatch)(SearchForm);