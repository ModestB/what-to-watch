import React from 'react';

import classes from './Suggestions.module.scss';

import ReactHtmlParser from 'react-html-parser';

const suggestions = (props) => {
  let suggestions = null;
  if (props.suggestions) {
    suggestions = props.suggestions.map((element) => {
      let name = '';
      let editedName = '';
      switch(element.media_type) {
        case 'tv':
          name = element.original_name;
          break;
        case 'person':
          name = element.name;
          break;
        default:
          name = element.original_title;
      }
      if (name.toLowerCase().indexOf(props.value) >= 0) {
        editedName= name.toLowerCase().split(props.value).join(`<span>${props.value}</span>`);
      } else {
        editedName= name.toLowerCase();
      }
      return (     
        <div
          key={element.id}
          className='mb-0 text-left'
          onClick={() => props.suggestionClickHandler(name)}
        >
          {ReactHtmlParser(`<p class="mb-0">${editedName}</p>`)}
        </div>
      )
    })
  }

  return (
    <div className={`${classes.suggestions} ${props.showSuggestions ? classes.show : ''}`}>
      {suggestions}
    </div>
  )
}

export default suggestions;