import * as loginActions from "./types"


export const getloginRequest = (Credentials:loginActions.credentials):loginActions.LoginActionTypes=>{
    return {
        type:loginActions.LOGIN_REQUEST,
        payload:Credentials
    }
}
export const getloginRequestLoading = ():loginActions.login_loading_action_type=>{
    return {
        type:loginActions.LOGIN_LOADING,
            }
}

export const getloginSuccess = (payload:string):loginActions.LoginActionTypes=>{
    return {
        type:loginActions.LOGIN_SUCCESS,
        payload:"login succeed"
    }
}

