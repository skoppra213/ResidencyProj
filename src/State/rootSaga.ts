import { all, fork } from "redux-saga/effects";
import {loginSaga} from "./login";
import {lookUpSaga} from "./lookUps"
 
export default function* rootSaga() {
  yield all([fork(loginSaga),
             fork(lookUpSaga)
            ]);
}
