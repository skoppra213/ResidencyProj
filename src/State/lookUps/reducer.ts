import {
    Loading,
    AppTypes_Success,
    Nationalities_Success,
    LookUpActionTypes,
    ILookUpState
  } from './types';


  const initialState: ILookUpState = {
    AppTypes:undefined,
    Nationalities:undefined,
    IsLoading:false
  }


export function lookUpReducer(state: ILookUpState = initialState,
  action: LookUpActionTypes): ILookUpState {
  switch (action.type) {
    case Loading:
      return {
        ...state,
        IsLoading: action.payload
      }
    case AppTypes_Success:
      return {
        ...state,
        AppTypes: [...action.payload]
      }
    case Nationalities_Success:
      return {
        ...state,
        Nationalities: [...action.payload]
      }


    default:
      return state
  }

}

  export default lookUpReducer;