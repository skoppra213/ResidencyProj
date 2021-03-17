import { combineReducers } from "redux"; 

import loginReducer from "./login" ;
import lookUpReducer from "./lookUps";
import newAppReducer from "./newApp"



export const rootReducer = combineReducers({
    login: loginReducer,
    lookUp:lookUpReducer,
    newApp:newAppReducer
  });

  export type RootState = ReturnType<typeof rootReducer>

