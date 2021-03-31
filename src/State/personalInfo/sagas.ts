import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import * as actions from "./action";
import { createPersonalInfo,fetchPersonalInfo,updatePersonalInfo } from "../../Services/personalInfo";


function* onPersonalInfoRequest({ type, payload }: actionTypes.CreateRequestActionType) {
  try {
    let res: actionTypes.IState = yield call(createPersonalInfo, payload);
    yield put(actions.getCreateSuccess(res));
  } catch (error) {

  }
}

function* onFetchRequest({ type,payload }: actionTypes.FetchActionType) {
  try {
    let res: actionTypes.IState = yield call(fetchPersonalInfo, payload);
    yield put(actions.getFetchIncompleteSuccess(res));
  } catch (error) {

  }
}

function* onUpdateRequest({ type,payload }: actionTypes.UpdateActionType) {
  try {
     let res: actionTypes.IState = yield call(updatePersonalInfo, payload);
     yield put(actions.getUpdateSuccess(res));
  } catch (error) {

  }
}


function* watchOnPersonalInfo() {
  yield takeEvery(actionTypes.CreateRequest, onPersonalInfoRequest);
  yield takeEvery(actionTypes.FetchRequest, onFetchRequest);
  yield takeEvery(actionTypes.UpdateRequest, onUpdateRequest);
}

export default function* personalInfoSaga() {
  yield all([fork(watchOnPersonalInfo)]);
}