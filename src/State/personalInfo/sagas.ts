import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import * as actions from "./action";
import { createNewApp } from "../../Services/newApp";


function* onPersonalInfoRequest({ type, payload }: actionTypes.CreateRequestActionType) {
  try {
    let res: actionTypes.IState = yield call(createNewApp, payload);
    yield put(actions.getCreateSuccess(res));
  } catch (error) {

  }
}


function* watchOnPersonalInfo() {
  yield takeEvery(actionTypes.CreateRequest, onPersonalInfoRequest);
}

export default function* personalInfoSaga() {
  yield all([fork(watchOnPersonalInfo)]);
}