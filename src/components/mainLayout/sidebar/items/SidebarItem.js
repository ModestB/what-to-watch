import React from "react";
import { useDispatch } from "react-redux";

import classes from "./SidebarItem.module.scss";

import useRoute from "../../../../hooks/useRoute";

import { resetSearchResults } from "../../../../store/actions/actions";

export const SidebarItem = ({ title, children, route, onClick = () => {} }) => {
  const dispatch = useDispatch();
  const { currentRoute, changeRoute } = useRoute();

  const clickHandler = () => {
    changeRoute(route, title);
    dispatch(resetSearchResults());
    onClick();
  };

  return (
    <div
      className={[
        classes.item,
        currentRoute.route === route ? classes.active : "",
      ].join(" ")}
      title={title}
      onClick={() => clickHandler()}
    >
      {children}
    </div>
  );
};

export default SidebarItem;
