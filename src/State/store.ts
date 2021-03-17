

import { applyMiddleware, createStore,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import composeWithDevTools from 'remote-redux-devtools';
import {rootReducer,RootState} from "./rootReducer";
// import ReduxPromise from "redux-promise";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
    // const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    
    sagaMiddleware.run(rootSaga);
    return store;
  };

  export default configureStore;

