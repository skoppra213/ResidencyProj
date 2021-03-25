import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import * as actions from "./action";
import * as loockupActions from "../lookUps/action"
import {  } from "../../Services/passportInfo";


function* onPersonalInfoRequest({ type, payload }: actionTypes.CreateRequestActionType) {
  try {
 yield "a";
    // let res: actionTypes.IState = yield call(createPersonalInfo, payload);
    // console.log("in personal saga",res);
    // yield put(actions.getCreateSuccess(res));
  } catch (error) {

  }
}


function* watchOnPersonalInfo() {
  yield takeEvery(actionTypes.CreateRequest, onPersonalInfoRequest);
}

export default function* passportInfoSaga() {
  yield all([fork(watchOnPersonalInfo)]);
}