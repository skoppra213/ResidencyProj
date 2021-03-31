import * as Types from './types';


  const initialState: Types.IState = {
   applicationDate:undefined,
   applicationStatusId:undefined,
   applicationNumber:undefined,
   applicationTypeId:undefined,
   isActive:undefined,
   remark:undefined,
   stepNo:undefined,
   userId:undefined
  }


  export function newAppReducer( state:Types.IState = initialState,
    action: Types.NewAppActionsTypes):Types.IState{
    switch (action.type) {
      case Types.CreateSuccess:
        return {
          ...action.payload,
        }
      case Types.IncompleteFetchSuccess:
        return {
          ...action.payload,
        }
      case Types.UpdateSuccess:
        return {
          ...action.payload,
        }
      default:
        return state
    }

  }

  export default newAppReducer;