import React from "react";

import classes from "./SidebarItem.module.scss";

import useRoute from "../../../../hooks/useRoute";

export const SidebarItem = ({ title, children, route }) => {
  const { currentRoute, changeRoute } = useRoute();

  return (
    <div
      className={[
        classes.item,
        currentRoute.route === route ? classes.active : "",
      ].join(" ")}
      title={title}
      onClick={() => changeRoute(route, title)}
    >
      {children}
    </div>
  );
};

export default SidebarItem;
