import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/index";

import {
  watchBookmarks,
  watchExtraShowInfo,
  watchFilterSinglePage,
  watchSearchResults,
  watchSearchSuggestions,
  watchShowById,
  watchTrendingShows,
} from "./sagas/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      sagaMiddleware // lets us dispatch() functions
    )
  )
);

sagaMiddleware.run(watchBookmarks);
sagaMiddleware.run(watchExtraShowInfo);
sagaMiddleware.run(watchFilterSinglePage);
sagaMiddleware.run(watchSearchResults);
sagaMiddleware.run(watchSearchSuggestions);
sagaMiddleware.run(watchShowById);
sagaMiddleware.run(watchTrendingShows);

export default store;
