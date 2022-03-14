import React from "react";

import SidebarItem from "../SidebarItem";
import FireIcon from "../../../../../icons/js/Fire";

export const TrendingItem = (props) => {
  return (
    <SidebarItem title="Trending" route="trending">
      <FireIcon fill="#ffffff" width="30px" height="30px" />
    </SidebarItem>
  );
};

export default TrendingItem;
