// src/redux/store.js

import { createStore, applyMiddleware, compose } from "redux";

// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";
// import logger from "redux-logger";

import familyTreeReducer from './redux/reducers';

const middleware = [];
const allStoreEnhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(familyTreeReducer, allStoreEnhancers);

export default store;