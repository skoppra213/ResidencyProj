import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import * as ManageRequestsTypes from "./types";
import * as ManageRequestsActions from "./actions";
import * as ManageRequestsActionsTypes from "./types";
import * as api from "./api";
import { createNewApp } from "../../Services/newApp";
function* ManageRequest({type,payload}:ManageRequestsTypes.ManageRequestsCREATE) {
    try {
      let res: ManageRequestsTypes.IRequests[] = yield call(api.GetUserApplicationsByUserId, payload);
      //console.log("saga",res)
     yield put(ManageRequestsActions.RequestSuccess(res));
    }
     catch (error) 
     {

    }
  }
  
  function* watchOnManageRequest() {
    yield takeEvery(ManageRequestsActionsTypes.CreateRequest, ManageRequest);
  }
  
  function* ManageRequestAdmin({type}:ManageRequestsTypes.ManageRequestsCREATEAdmin) {
    try {
      let res: ManageRequestsTypes.IRequests[] = yield call(api.GetUserApplicationsAdmin);
     yield put(ManageRequestsActions.RequestSuccess(res));
    }
     catch (error) 
     {

    }
  }
  
  function* watchOnManageRequestAdmin() {
    yield takeEvery(ManageRequestsActionsTypes.CreateRequestAdmin, ManageRequest);
  }
  

  function* SelectedRequest({type,payload}:ManageRequestsTypes.ManageSelectedRequest) {
    try {
      yield put(ManageRequestsActions.SelectedRequest(payload));
    } catch (error) {
  

    }
  }
  
  
  function* watchOnSelectedRequest() {
    yield takeEvery(ManageRequestsActionsTypes.SelectedRequest, SelectedRequest);
  }
  


  function* DeleteRequest({type,payload}:ManageRequestsTypes.ManageSelectedRequest) {
    try {
      let res: ManageRequestsTypes.IRequests[] = yield call(api.GetUserApplicationsByUserId, payload);
      yield put(ManageRequestsActions.RequestSuccess(res));
    } catch (error) {
  
    }
  }
  
  
  function* watchOnDeleteRequest() {
    yield takeEvery(ManageRequestsActionsTypes.DeleteRequest, DeleteRequest);
  }
  


  export default function* ManageRequests() {
    yield all([fork(watchOnManageRequest)]);
  }