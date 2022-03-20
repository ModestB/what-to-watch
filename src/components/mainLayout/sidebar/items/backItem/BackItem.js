import React from "react";

import SidebarItem from "../SidebarItem";
import BackIcon from "../../../../../icons/js/Back";

export const BackItem = (props) => {
  return (
    <SidebarItem route="back">
      <BackIcon fill="#ffffff" width="30px" height="30px" />
    </SidebarItem>
  );
};

export default BackItem;
