import React from "react";

import classes from "./SidebarItem.module.scss";

import useRoute from "../../../../hooks/useRoute";

export const SidebarItem = ({ title, children, route, onClick = () => {} }) => {
  const { currentRoute, changeRoute } = useRoute();

  const clickHandler = () => {
    changeRoute(route, title);
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
