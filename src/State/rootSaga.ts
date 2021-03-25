import { all, fork } from "redux-saga/effects";
import {loginSaga} from "./login";
import {lookUpSaga} from "./lookUps";
import {newAppSaga} from "./newApp"
import {personalInfoSaga} from "./personalInfo"
import {passportInfoSaga} from "./passportInfo";
 
export default function* rootSaga() {
  yield all([fork(loginSaga),
             fork(lookUpSaga),
             fork(newAppSaga),
             fork(personalInfoSaga),
             fork(passportInfoSaga)
            ]);
}
