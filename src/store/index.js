import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./reducers/index";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);
// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(
//       thunkMiddleware, // lets us dispatch() functions
//     ),
//     window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f   
//   )
// );

export default store;