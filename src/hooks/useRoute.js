import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_ROUTE } from "../store/actionTypes/actionTypes";

function useRoute() {
  const dispatch = useDispatch();
  const currentRoute = useSelector((state) => state.routes);

  const changeRoute = (route, title) => {
    dispatch({ type: SET_ROUTE, payload: { route, title } });
  };

  return {
    currentRoute,
    changeRoute,
  };
}

export default useRoute;
