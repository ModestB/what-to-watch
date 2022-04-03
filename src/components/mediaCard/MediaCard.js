import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Action Types
import { initFilterSinglePage } from "../../store/actions/actions";

import useRoute from "../../hooks/useRoute";

// Components imports
import CardContent from "./cardContent/CardContent";
import PosterImg from "./posterImg/PosterImg";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import BookmarkButton from "../bookmarks/bookmarkBtn/BookmarkBtn";
import Badge from "./badge/Badge";
import CardFooter from "./cardFooter/CardFooter";

// Style imports
import classes from "./MediaCard.module.scss";

const MediaCard = (props) => {
  const dispatch = useDispatch();
  const displayedResults = useSelector((state) => state.displayedResults);
  const singlePageType = useSelector((state) => state.singlePageType);
  const loadingShowCard = useSelector((state) => state.loadingShowCard);

  const { isSinglePage, changeRoute } = useRoute();

  const displaySinglePageHandler = () => {
    dispatch(
      initFilterSinglePage(props.element, displayedResults, singlePageType)
    );
    changeRoute("single");
  };

  return (
    <div className={`${classes.container}`}>
      <section
        className={`${classes.card__wrp} ${
          isSinglePage ? classes.singlePage : ""
        }`}
      >
        {loadingShowCard ? (
          <LoadingSpinner />
        ) : (
          <div className={`${classes.card}`}>
            <Badge rating={props.rating} />

            <div className={`${classes.body}`}>
              <PosterImg posterPath={props.posterPath} />

              <BookmarkButton
                id={props.element.id}
                mediaType={props.mediaType}
                title={props.title}
                date={props.date ? props.date.substring(0, 4) : "Not specified"}
              />

              <CardContent
                cardType={props.cardType}
                showTitle={props.title}
                showOverview={props.overview}
                showMediaType={props.mediaType}
                showDate={props.date}
                personName={props.name}
                profileKnownFor={props.knownFor}
              />
            </div>

            <CardFooter />

            {!isSinglePage && (
              <div
                className={`${classes.overlay}`}
                onClick={() => displaySinglePageHandler()}
              >
                <p>More Info</p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default MediaCard;
