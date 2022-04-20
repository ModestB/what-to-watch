import React from "react";

// Style imports
import classes from "./MainLayout.module.scss";

import MainLayoutSidebar from "./sidebar/MainLayoutSidebar";
import MainLayoutContent from "./content/MainLayoutContent";

const MainLayout = (props) => {
  return (
    <div className={classes.container}>
      <MainLayoutSidebar />
      <MainLayoutContent />
    </div>
  );
};

export default MainLayout;
