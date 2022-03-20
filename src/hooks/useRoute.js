import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_ROUTE } from "../store/actionTypes/actionTypes";

function useRoute() {
  const dispatch = useDispatch();
  const currentRoute = useSelector((state) => state.routes);
  const [isSinglePage, setIsSinglePage] = useState(false);

  const changeRoute = (route, title) => {
    dispatch({ type: SET_ROUTE, payload: { route, title } });
  };

  useEffect(() => {
    setIsSinglePage(currentRoute.route === "single");
  }, [currentRoute]);

  return {
    currentRoute,
    changeRoute,
    isSinglePage,
  };
}

export default useRoute;
