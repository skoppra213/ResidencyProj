import { combineReducers } from "redux"; 

import loginReducer from "./login" ;
import lookUpReducer from "./lookUps";
import newAppReducer from "./newApp";
import personalInfoReducer  from "./personalInfo"



export const rootReducer = combineReducers({
    login: loginReducer,
    lookUp:lookUpReducer,
    newApp:newAppReducer,
    personalInfo:personalInfoReducer
  });

  export type RootState = ReturnType<typeof rootReducer>

