import React from 'react';

import classes from "./LoadingSpinner.module.scss";

const loadingSpinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  
  )
}

export default loadingSpinner;