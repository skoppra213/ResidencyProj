import * as Types from './types';


const initialState: Types.IState = {
  id: undefined,
  employeeNumber: undefined,
  employeeNameArabic: undefined,
  employeeNameEnglish: undefined,
  birthDate: undefined,
  mobileNumber: undefined,
  department: undefined,
  jobTitle: undefined,
  hireDate: undefined,
  applicationNumber: undefined,
  userId: undefined,
  createdDate: undefined,
  updatedDate: undefined
}


export function personalInfoReducer(state: Types.IState = initialState,
  action: Types.NewAppActionsTypes): Types.IState {
  switch (action.type) {
    case Types.CreateSuccess:
      console.log("in create success", action.payload)
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

export default personalInfoReducer;