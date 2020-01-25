import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Action Types
import {
  addBookmark,
  removeBookmark
} from '../../../store/actions/actions';

import classes from './BookmarkBtn.module.scss';
import HeartIcon from '../../../icons/js/Heart';

const BookmarkBtn = (props) => {
  let [active, setActive] = useState(false);

  useEffect(() => {
    let bookmark = null;

    if (props.bookmarks) {
      bookmark = props.bookmarks.find((boomark) => {
        return boomark.id === props.id;
      })
    }
  

    if (bookmark) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.bookmarks, props.id]);

  function clickHandler() {
    if (!active) {
      props.addBookmark({id: props.id, title: props.title, date: props.date, mediaType: props.mediaType});
    } else {
      setActive(false);
      props.removeBookmark(props.id);
    };
  };

  return (   
    <HeartIcon
      className={`${classes.btn} ${active ? classes.active : ''}`}
      onClick={clickHandler}
      width='25px'
      height='25px'
    />
  );
}

const mapStateProps = state => {
  return {
    bookmarks: state.bookmarks
  }
}

const mapStateDispatch = dispatch => {
  return {
    addBookmark: (bookmarkDetails) => dispatch(addBookmark(bookmarkDetails)),
    removeBookmark: (bookmarkId) => dispatch(removeBookmark(bookmarkId)),
  }
}

export default connect(mapStateProps, mapStateDispatch)(BookmarkBtn);