import loginReducer from "./reducer"

import {getloginRequest,getloginSuccess,getllogout} from "./action"
import loginSaga from "./sagas";

export default loginReducer;
export {loginSaga};
export {
    getloginRequest,
    getloginSuccess,
    getllogout
};