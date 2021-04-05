import * as Types from './types';


  const initialState: Types.IState = {
    id:undefined,  
    civilID:undefined,  
    nationalityId:undefined,
    passportNumber:undefined,
    issueCountry:undefined,
    issueDate:undefined,
    expiryDate:undefined,
    mobileNumber:undefined,  
    address:undefined,
    residencyExpiryDate:undefined,
    applicationNumber:undefined,    
    userId:undefined,    
    createdDate:undefined, 
    updatedDate:undefined
  }


  export function passportInfoReducer( state:Types.IState = initialState,
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

  export default passportInfoReducer;