import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Action Types
import { initFilterSinglePage } from "../../store/actions/actions";

import useRoute from "../../hooks/useRoute";

// Components imports
import CardContent from "./cardContent/CardContent";
import CreditCards from "./creditCards/CreditCards";
import PosterImg from "./posterImg/PosterImg";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import BookmarkButton from "../bookmarks/bookmarkBtn/BookmarkBtn";
import Badge from "./badge/Badge";
import Trailers from "./trailers/Trailers";
import Reviews from "./reviews/Reviews";
import CardFooter from "./cardFooter/CardFooter";

// Style imports
import classes from "./MediaCard.module.scss";

const MediaCard = (props) => {
  const dispatch = useDispatch();
  const displayedResults = useSelector((state) => state.displayedResults);
  const singlePageType = useSelector((state) => state.singlePageType);
  const displayReviews = useSelector((state) => state.displayReviews);
  const trailersData = useSelector((state) => state.trailersData);
  const displayTrailers = useSelector((state) => state.displayTrailers);
  const loadingShowCard = useSelector((state) => state.loadingShowCard);
  const profileDetails = useSelector((state) => state.profileDetails);
  const reviewsData = useSelector((state) => state.reviewsData);
  const { isSinglePage, changeRoute } = useRoute();
  let accordionElements = null;

  if (props.cardType !== "person") {
    accordionElements = [
      {
        title: "Trailers",
        body: (
          <Trailers
            trailersData={trailersData}
            displayTrailers={displayTrailers}
          />
        ),
        id: props.element.id,
      },
      {
        title: "Reviews",
        body: (
          <Reviews reviewsData={reviewsData} displayReviews={displayReviews} />
        ),
        id: props.element.id,
      },
    ];
  } else {
    accordionElements = [
      {
        title: "Biography",
        body: (
          <p
            className={`${classes.biography}  ${
              !profileDetails.biography ? classes.biographyNoInfo : null
            } customScroll`}
          >
            {profileDetails.biography
              ? profileDetails.biography
              : "No Information"}
          </p>
        ),
        id: props.element.id,
      },
      {
        title: "Starred In",
        body: <CreditCards />,
        id: props.element.id,
      },
    ];
  }

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

              {props.cardType !== "person" ? (
                <BookmarkButton
                  id={props.element.id}
                  mediaType={props.mediaType}
                  title={props.title}
                  date={
                    props.date ? props.date.substring(0, 4) : "Not specified"
                  }
                />
              ) : null}

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

            <CardFooter
              displaySinglePage={isSinglePage}
              elements={accordionElements}
            />

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
