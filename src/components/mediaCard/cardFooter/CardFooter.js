import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import useRoute from "../../../hooks/useRoute";

import CardFooterItem from "./cardFooterItem/CardFooterItem";
import Trailers from "../trailers/Trailers";
import Reviews from "../reviews/Reviews";

import classes from "./CardFooter.module.scss";

const CardFooter = ({ elements }) => {
  const { isSinglePage } = useRoute();
  const reviewsData = useSelector((state) => state.reviewsData);
  const displayReviews = useSelector((state) => state.displayReviews);
  const [activeItemId, setActiveItemId] = useState(null);

  useEffect(() => {
    if (activeItemId !== "trailers") {
      const videosIframes = Array.from(document.querySelectorAll("iframe"));

      if (videosIframes.length) {
        videosIframes.forEach((e) => {
          e.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        });
      }
    }
  }, [activeItemId]);

  const setActiveItem = (itemId) => {
    if (activeItemId === itemId) {
      setActiveItemId(null);
    } else {
      setActiveItemId(itemId);
    }
  };

  return (
    isSinglePage && (
      <footer className={`${classes.footer}`}>
        <div className="d-flex">
          <CardFooterItem
            show={activeItemId === "trailers"}
            clickHandler={() => setActiveItem("trailers")}
            title="Trailers"
          >
            <Trailers />
          </CardFooterItem>
          <CardFooterItem
            show={activeItemId === "reviews"}
            clickHandler={() => setActiveItem("reviews")}
            title="Reviews"
          >
            <Reviews
              reviewsData={reviewsData}
              displayReviews={displayReviews}
            />
          </CardFooterItem>
        </div>
      </footer>
    )
  );
};

export default CardFooter;
