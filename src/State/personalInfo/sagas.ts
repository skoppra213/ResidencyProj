import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import * as actions from "./action";
import { createPersonalInfo } from "../../Services/personalInfo";


function* onPersonalInfoRequest({ type, payload }: actionTypes.CreateRequestActionType) {
  try {
    let res: actionTypes.IState = yield call(createPersonalInfo, payload);
    console.log("in personal saga",res);
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