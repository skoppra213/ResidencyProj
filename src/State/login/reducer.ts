import {
    LoginActionTypes,
    AuthState,
    LOGIN_SUCCESS,
    LOGIN_LOADING,
    LOGOUT
  } from './types'
  
  const initialState: AuthState = {
    isLoggedIn:false,
    jwtToken:undefined,
    userInfo:undefined,
    isLoading:true
  }
  
  export function loginReducer(
    state:AuthState = initialState,
    action: LoginActionTypes
  ): AuthState {

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
             userInfo:action.payload.userInfo,
             jwtToken:action.payload.jwtToken

            }
            case LOGOUT:
              return {
               ...state,
               isLoggedIn:false,
               isLoading:false,
               jwtToken:undefined,
               userInfo:undefined
  
              }    
      default:
        let localStorageData:any = localStorage.getItem('user');
            if (localStorageData) {
                localStorageData = JSON.parse(localStorageData);
                return {
                    ...state,
                    isLoggedIn:true,
                    isLoading:false,
                    jwtToken:localStorageData.response.jwtToken,
                    userInfo:localStorageData.response.userInfo,
                }
            }

            return state;
       
    }
  }

  export default loginReducer;