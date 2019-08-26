import React, { Component } from "react";

// Bootsrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import CSS
import classes from './SearchForm.module.scss';

import Suggestions from './suggestions/Suggestions';
import CloseIcon from '../../icons/js/Close';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange=this.handleChange.bind(this);
    this.suggestionClickHandler=this.suggestionClickHandler.bind(this);
    this.seacrApiCallTimeout=0;
  }
  state = {
    value: '',
    searchSuggestions: [],
    showSuggestions: false,
    elementToFocus: null
  }

  handleChange(event){
    event.persist(); 
    let keywordRequest = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${event.target.value}&page=1&include_adult=false`

    this.setState ({
      value: event.target.value
    })

    if (this.seacrApiCallTimeout) {
      clearTimeout(this.seacrApiCallTimeout)
    };
    this.seacrApiCallTimeout = setTimeout(() => {
      if (!event.target.value) {
        this.setState ({
          showSuggestions: false
        })
      } else {    
        return fetch(keywordRequest)
          .then((response) => {  
            return response.json();
          })
          .then((data) => {
            this.setState ({
              showSuggestions: true,
              searchSuggestions: data.results
            })     
          })
      }
    }, 500)
  }

  suggestionClickHandler (value) {
    this.setState ({
      value: value,
      showSuggestions: false
    })
    this.props.searchHandler(value);
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.setState ({
      value: '',
      searchSuggestions: [],
      showSuggestions: false
    })
    this.props.searchHandler(this.nameInput.value);
  }

  focusOutHandler = () => {
    window.setTimeout(() => {
      this.setState({
        showSuggestions: false
      })   
    })    
  }

  focusHandler = () => {
    if (this.state.value) {
      this.setState({
        showSuggestions: true
      })
    }  
  }

  deleteInputHandler = () => {
    this.setState({
      value: '',
      searchSuggestions: [],
      showSuggestions: false,
      
    }, () => {
      this.nameInput.focus();
    })
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
            className={`${classes.SearchFormInput} pr-4`} 
            type="text" 
            ref={(ref) => { this.nameInput = ref; }} 
            placeholder="Enter Movie or Tv show name..." 
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.focusOutHandler}
            onFocus={this.focusHandler}
          />
          {this.state.value ? 
            <div 
              className={classes.iconClose}
              onClick={this.deleteInputHandler}
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
          className={`${ classes.SearchSubmitBtn } ml-2`}
          variant="primary" 
          type="submit"
        >
          Find
        </Button>
        <Suggestions 
          value={this.state.value}
          suggestions={this.state.searchSuggestions}
          showSuggestions={this.state.showSuggestions}
          suggestionClickHandler={this.suggestionClickHandler}
          elementToFocus={this.state.elementToFocus}
        />      
      </Form>
    )
  }
}

export default SearchForm;