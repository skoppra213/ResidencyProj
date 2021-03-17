import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import * as actions  from "./action";
import {createNewApp} from "../../Services/newApp";


  function* onNewAppRequest({ type, payload  }: actionTypes.CreateRequestActionType) {
    try {
          console.log("b4 yield payload",payload);
          let res:actionTypes.INewAppState= yield call(createNewApp,payload);
          console.log("after yield",res);
          yield put(actions.getCreateSuccess(res));
    } catch (error) {

    }
  }


function* watchOnNewApp() {
    yield takeEvery(actionTypes.CreateRequest, onNewAppRequest);
  }

  export default function* newAppSaga() {
    yield all([fork(watchOnNewApp)]);
  }