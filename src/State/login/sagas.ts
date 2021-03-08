import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import {  AuthenticateResponse} from "../../types/userInfo";
import * as actionTypes from "./types";
import {getloginSuccess,getloginRequestLoading} from "./action"

import {login} from "../../Services/login"


function* onLoginRequest({ type, payload  }: actionTypes.login_request_action_type) {
  console.log("in onLoginRequest");
    const { username, password} = payload;
    try {
      yield put(getloginRequestLoading());
      const  loginRes:AuthenticateResponse  = yield call(login, username, password);
      loginRes.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(loginRes));
      console.log("data",loginRes);
      yield put(getloginSuccess("PleaseWork"));
    } catch (error) {

    }
  }


function* watchOnLgin() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, onLoginRequest);
  }

  export default function* loginSaga() {
    yield all([fork(watchOnLgin)]);
  }