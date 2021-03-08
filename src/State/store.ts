

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import {rootReducer,RootState} from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
  };

  export default configureStore;

