import {
    AppTypes_Success,
    LookUpActionTypes,
    ILookUpState
  } from './types';


  const initialState: ILookUpState = {
    AppTypes:undefined
  }


  export function lookUpReducer( state:ILookUpState = initialState,
    action: LookUpActionTypes):ILookUpState{
        switch (action.type) {
            case AppTypes_Success:
                return {
                 ...state,
                 AppTypes:[...action.payload]
                }
          default:
            return state
        }

  }

  export default lookUpReducer;