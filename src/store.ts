import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./storeRedux/reducers";

const composeEnhancers =
  // process.env.NODE_ENV === "development"
  //  ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  //   : null
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
