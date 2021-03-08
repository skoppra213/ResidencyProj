import {
    LoginActionTypes,
    AuthState,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_LOADING
  } from './types'
  
  const initialState: AuthState = {
    isLoading:false,  
    isLoggedIn:false,
    session:undefined,
    userName:undefined,
    jwtToken:undefined,
    civilId:undefined
  }
  
  export function loginReducer(
    state:AuthState = initialState,
    action: LoginActionTypes
  ): AuthState {
      console.log("in loginReducer");
    switch (action.type) {
        case LOGIN_LOADING:
        return {
         ...state,
         isLoading:true,
        }
        case LOGIN_SUCCESS:
            return {
             ...state,
             isLoggedIn:true,
             isLoading:false,
             userName:"tryThisOut"
            }
      default:
        return state
    }
  }

  export default loginReducer;