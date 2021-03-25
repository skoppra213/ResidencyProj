import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import {  AuthenticateResponse} from "../../types/userInfo";
import * as actionTypes from "./types";
import {getloginSuccess} from "./action"
import {setLoading} from "../lookUps/action"; 
import {login} from "../../Services/login";




function* onLoginRequest({ type, payload  }: actionTypes.login_request_action_type) {
    const { username, password} = payload;
   
    try {
      yield put(setLoading(true));
      const  loginRes:AuthenticateResponse  = yield call(login, username, password);
      loginRes.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(loginRes));
      let tempState : actionTypes.AuthState ={
        isLoading:false,
        jwtToken:loginRes.response.jwtToken,
        userInfo:loginRes.response.userInfo,
        isLoggedIn:true
      }
      yield put(getloginSuccess(tempState));
      yield put(setLoading(false));

       
    } catch (error) {

    }
  }


function* watchOnLgin() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, onLoginRequest);
  }

  export default function* loginSaga() {
    yield all([fork(watchOnLgin)]);
  }