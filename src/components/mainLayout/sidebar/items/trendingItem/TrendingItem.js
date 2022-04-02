import React from "react";
import { useDispatch } from "react-redux";

import {
  getTrendingShows,
  resetDisplayedResults,
} from "../../../../../store/actions/actions";

import SidebarItem from "../SidebarItem";
import FireIcon from "../../../../../icons/js/Fire";

export const TrendingItem = (props) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(resetDisplayedResults());
    dispatch(getTrendingShows());
  };
  return (
    <SidebarItem
      title="Trending"
      route="trending"
      onClick={() => clickHandler()}
    >
      <FireIcon fill="#ffffff" width="30px" height="30px" />
    </SidebarItem>
  );
};

export default TrendingItem;
