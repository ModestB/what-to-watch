import React from 'react';

import classes from "./LoadingSpinner.module.scss";

const loadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 p-3">
      <div className={classes.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  
  )
}

export default loadingSpinner;