import React from "react";

import SidebarItem from "../SidebarItem";
import SearchIcon from "../../../../../icons/js/Search";

export const SearchItem = (props) => {
  return (
    <SidebarItem title="Search" route="search">
      <SearchIcon fill="#ffffff" width="30px" height="30px" />
    </SidebarItem>
  );
};

export default SearchItem;
