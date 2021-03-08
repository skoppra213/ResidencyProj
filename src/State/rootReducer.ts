import { combineReducers } from "redux"; 

import loginReducer from "./login" 
import lookUpReducer from "./lookUps"



export const rootReducer = combineReducers({
    login: loginReducer,
    lookUp:lookUpReducer
  });

  export type RootState = ReturnType<typeof rootReducer>

