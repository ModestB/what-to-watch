import React, { useState, useEffect } from 'react';

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
      props.addBookmark(props.id, props.title, props.date, props.mediaType);
    } else {
      setActive(false);
      props.removeBookmark(props.id);
    };
  };

  return (   
    <HeartIcon
      className={`${classes.bookmarkBtn} ${active ? classes.active : ''}`}
      onClick={clickHandler}
      width='25px'
      height='25px'
    />
  );
}

export default BookmarkBtn;