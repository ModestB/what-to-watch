import React from 'react';
import { connect } from 'react-redux';

// Action Types
import * as actions from '../../../store/actions/actions';

import classes from './BookmarkItem.module.scss';
import CloseIcon from '../../../icons/js/Close';

const BookmarkItem  = React.memo(function BookmarkItem (props) {
  function clickHandler () {
    props.displayBookmarksHandler();
    props.getShowById(props.id, props.mediaType);
  }

  return (
    <div className='d-flex justify-content-between align-items-center pb-2'>
      <div 
        className={`${classes.title} d-flex text-left`}
        onClick={clickHandler}
      >
        {`${props.title} (${props.date})`}
      </div>
      
      <CloseIcon 
        className={`${classes.closeIcon}`}
        onClick={() => props.removeBookmark(props.id)}
        width="20px" 
        height="20px"
      />
    </div>
  )
});

const mapStateDispatch = dispatch => {
  return {
    getShowById: (showId, mediaType) => dispatch(actions.getShowById(showId, mediaType)) 
  }
}

export default connect(null, mapStateDispatch)(BookmarkItem);