import React, { useEffect, useState } from "react";

import useRoute from "../../../../hooks/useRoute";
import { useSelector } from "react-redux";

// Components imports
import MediaCard from "../../../mediaCard/MediaCard";

// Style imports
import classes from "./ContentItems.module.scss";

const ContentItems = () => {
  const { currentRoute, isSinglePage, isSearchPage } = useRoute();
  const displayedResults = useSelector((state) => state.displayedResults);
  const [noItemsMsg, setNoItemsMsg] = useState("");

  useEffect(() => {
    if (currentRoute.route === "search") {
      setNoItemsMsg("No results");
    } else {
      setNoItemsMsg("");
    }
  }, [currentRoute]);

  return (
    <div
      className={[
        classes.container,
        isSinglePage ? classes.singlePage : "",
        isSearchPage ? classes.searchPage : "",
        "customScroll",
      ].join(" ")}
    >
      {displayedResults.current.length
        ? displayedResults.current.map((element) => (
            <MediaCard
              key={element.id}
              title={element.title || element.original_name}
              overview={element.overview}
              posterPath={element.poster_path || element.profile_path}
              rating={element.vote_average}
              date={element.release_date || element.first_air_date}
              mediaType={element.media_type}
              element={element}
              name={element.name}
              knownFor={element.known_for}
            />
          ))
        : noItemsMsg}
    </div>
  );
};

export default ContentItems;
