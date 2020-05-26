import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(
      thunkMiddleware // lets us dispatch() functions
    )
  )
);

export default store;
