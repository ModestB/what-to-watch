import React, { Component } from "react";

// Bootsrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import CSS
import classes from "./SearchForm.module.css";

class SearchForm extends Component {
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.searchHandler( this.nameInput.value );
  }
  render () {
    return (
      <Form 
        className="d-flex pt-4 pb-3" 
        onSubmit={ this.formSubmitHandler }
      >
        <Form.Group 
          className="flex-grow-1" 
          controlId="searchNameInput"
        >
          <Form.Control 
            className={classes.SearchFormInput} 
            type="text" 
            ref={(ref) => { this.nameInput = ref; }} 
            placeholder="Enter Movie or Tv show name..." 
          />
        </Form.Group>
        <Button 
          className={`${ classes.SearchSubmitBtn } ml-2`}
          variant="primary" 
          type="submit">
          Find
        </Button>
      </Form>
    )
  }
}

export default SearchForm;