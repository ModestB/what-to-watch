import React from "react";
import { connect } from "react-redux";

// Action Types
import { filterSinglePage } from "../../../store/actions/actions";

// Components imports
import CardContent from "./cardContent/CardContent";
import CreditCards from "./creditCards/CreditCards";
import PosterImg from "./posterImg/PosterImg";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";
import BookmarkButton from "../../bookmarks/bookmarkBtn/BookmarkBtn";
import Badge from "./badge/Badge";
import Trailers from "./trailers/Trailers";
import Reviews from "./reviews/Reviews";
import CardFooter from "./cardFooter/CardFooter";

// Style imports
import classes from "./Card.module.scss";

const card = (props) => {
  let accordionElements = null;
  let cardOverlay = (
    <div
      className={`${classes.overlay}`}
      onClick={() =>
        props.filterSinglePage(
          props.element,
          props.displayedResults,
          props.singlePageType
        )
      }
    >
      <p>More Info</p>
    </div>
  );

  if (props.displaySinglePage) {
    cardOverlay = null;
  }

  if (props.cardType !== "person") {
    accordionElements = [
      {
        title: "Trailers",
        body: (
          <Trailers
            trailersData={props.trailersData}
            displayTrailers={props.displayTrailers}
          />
        ),
        id: props.element.id,
      },
      {
        title: "Reviews",
        body: (
          <Reviews
            reviewsData={props.reviewsData}
            displayReviews={props.displayReviews}
          />
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
              !props.profileDetails.biography ? classes.biographyNoInfo : null
            } customScroll`}
          >
            {props.profileDetails.biography
              ? props.profileDetails.biography
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

  let content = (
    <div className={`${classes.card}`}>
      <Badge rating={props.rating} />

      <div className={`${classes.body}`}>
        <PosterImg posterPath={props.posterPath} />

        {props.cardType !== "person" ? (
          <BookmarkButton
            id={props.element.id}
            mediaType={props.mediaType}
            title={props.title}
            date={props.date ? props.date.substring(0, 4) : "Not specified"}
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
        displaySinglePage={props.displaySinglePage}
        elements={accordionElements}
      />

      {cardOverlay}
    </div>
  );

  return (
    <div className={`${classes.container}`}>
      <section
        className={`${classes.card__wrp} ${
          props.displaySinglePage ? classes.singlePage : ""
        }`}
      >
        {props.loadingShowCard ? <LoadingSpinner /> : content}
      </section>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    displayedResults: state.displayedResults,
    displaySinglePage: state.displaySinglePage,
    displayReviews: state.displayReviews,
    reviewsData: state.reviewsData,
    displayTrailers: state.displayTrailers,
    trailersData: state.trailersData,
    loadingShowCard: state.loadingShowCard,
    profileDetails: state.profileDetails,
    profileCredits: state.profileCredits,
    loadingProfile: state.loadingProfile,
    singlePageType: state.singlePageType,
  };
};

const mapStateDispatch = (dispatch) => {
  return {
    filterSinglePage: (element, displayedResults, singlePageType) =>
      dispatch(filterSinglePage(element, displayedResults, singlePageType)),
  };
};

export default connect(
  mapStateProps,
  mapStateDispatch
)(card);
