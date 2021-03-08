import * as Types from './types';


  const initialState: Types.INewAppState = {
   applicationDate:undefined,
   applicationStatusId:undefined,
   applicationNumber:undefined,
   applicationTypeId:undefined,
   isActive:undefined,
   remark:undefined,
   stepNo:undefined,
   userId:undefined
  }


  export function lookUpReducer( state:Types.INewAppState = initialState,
    action: Types.NewAppActionsTypes):Types.INewAppState{
        switch (action.type) {
            case Types.CreateSuccess:
                return {
                 ...action.payload,
                }
             case Types.IncompleteFetchSuccess:
                return {
                 ...action.payload,
                }
          default:
            return state
        }

  }

  export default lookUpReducer;