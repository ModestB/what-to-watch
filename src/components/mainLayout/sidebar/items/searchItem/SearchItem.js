import React from "react";
import { useDispatch } from "react-redux";

import SidebarItem from "../SidebarItem";
import SearchIcon from "../../../../../icons/js/Search";

import { resetDisplayedResults } from "../../../../../store/actions/actions";

export const SearchItem = (props) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(resetDisplayedResults());
  };

  return (
    <SidebarItem title="Search" route="search" onClick={() => clickHandler()}>
      <SearchIcon fill="#ffffff" width="30px" height="30px" />
    </SidebarItem>
  );
};

export default SearchItem;
