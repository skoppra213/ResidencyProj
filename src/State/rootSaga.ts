import { all, fork } from "redux-saga/effects";
import {loginSaga} from "./login";
import {lookUpSaga} from "./lookUps";
import {newAppSaga} from "./newApp"
 
export default function* rootSaga() {
  yield all([fork(loginSaga),
             fork(lookUpSaga),
             fork(newAppSaga)
            ]);
}
