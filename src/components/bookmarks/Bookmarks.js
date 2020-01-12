import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

// Action Types
import {
  toggleBookmarks,
  removeBookmark
} from '../../store/actions/actions';

import classes from './Bookmarks.module.scss';

import BookmarkItem from './bookmarkItem/BookmarkItem';
import HeartIcon from '../../icons/js/Heart';
import CloseIcon from '../../icons/js/Close';

const Bookmarks = (props) => {
  const isInitialMount = useRef(true);
  let [heartKey, setHeartKey] = useState(0);
  useEffect(() => {    
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setHeartKey(heartKey + 1)
    }   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.bookmarks])


  let bookmarks = <p className="mb-0">No bookmarks</p>;

  if (props.bookmarks && props.bookmarks.length > 0) {
    bookmarks = props.bookmarks.map((bookmark) => {
      return (
        <BookmarkItem
          id={bookmark.id}
          key={bookmark.id}
          title={bookmark.title}
          mediaType={bookmark.mediaType}
          date={bookmark.date}
        />
      );
    });
  }
  return (
    <div 
      className={`
        ${classes.BookmarksHolder} 
        ${props.displayBookmarks ? classes.active : ''}
      `}
    >
      <header 
        className={`d-flex align-items-center justify-content-between`}
        onClick={props.toggleBookmarks}
      >
        <div className='d-flex align-items-center'>
          <p className={`${classes.Title} mb-0 pr-2`}> To Watch</p>
          <HeartIcon
            key={heartKey > 1 ? heartKey : '0'}
            fill='#ffffff'
            width='30px'
            height='30px'
            className={classes.runScaleUpCenter}
          />
          <span className='pl-2'>{props.bookmarks ? props.bookmarks.length : 0}</span>
        </div>

        <CloseIcon 
          className={`${classes.closeIcon}`}
          width="20px" 
          height="20px"
        />
      </header>
      <div
        className={`${classes.body} p-3 customScroll customScroll--red`}
      >
        { bookmarks }
      </div>
    </div>
  ) 
}

const mapStateProps = state => {
  return {
    displayBookmarks: state.displayBookmarks,
    bookmarks: state.bookmarks
  }
}

const mapStateDispatch = dispatch => {
  return {
    toggleBookmarks: () => dispatch(toggleBookmarks()),
    removeBookmark: (bookmarkId) => dispatch(removeBookmark(bookmarkId)),
  }
}
export default connect(mapStateProps, mapStateDispatch)(Bookmarks);