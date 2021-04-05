import * as Types from './types';


  const initialState: Types.IState = {
    id:undefined, 
    approvedLetterForResidencyRenewal:undefined,
    salaryCertification:undefined,
    civilIdCopy:undefined,
    passportCopy:undefined,
    otherRelatedDocuments:undefined,
    applicationNumber:undefined,
    userId:undefined,
    createdDate:undefined,
    updatedDate:undefined,
  }


  export function attachmentInfoReducer( state:Types.IState = initialState,
    action: Types.ActionsTypes):Types.IState{
      switch (action.type) {
        case Types.CreateSuccess:
          
          return {
            ...action.payload,
          }
        case Types.FetchSuccess:
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

  export default attachmentInfoReducer;