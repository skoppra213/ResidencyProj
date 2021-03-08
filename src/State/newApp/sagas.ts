import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "./types";
import {getFetchIncompleteRequest,getFetchIncompleteSuccess} from "./action";
// import {getAppTypes} from "../../Services/lookup"




function* onNewAppRequest() {

    try {
        yield "a"
        // const appTypes:SelectOptions[]  = yield call(getAppTypes);
        // console.log("appTypes",appTypes);
        // yield put(getAppTypesSuccess(appTypes));
    } catch (error) {

    }
  }


function* watchOnLookUps() {
    // yield takeEvery(actionTypes.AppTypes_request, onAppTypesRequest);
  }

  export default function* lookUpSaga() {
    yield all([fork(watchOnLookUps)]);
  }