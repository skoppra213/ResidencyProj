import * as Types from "./types"

export const getCreateRequest = (data:Types.IState):Types.CreateRequestActionType=>{
    return {
        type:Types.CreateRequest,
        payload:data
    }
}

export const getCreateSuccess = (data:Types.IState):Types.CreateSuccessActionType=>{
    return {
        type:Types.CreateSuccess,
        payload:data
    }
}

export const getFetchIncompleteRequest = ():Types.FetchIncompleteActionType=>{
    return {
        type:Types.IncompleteFetchRequest,
    }
}

export const getFetchIncompleteSuccess = (data:Types.IState):Types.IncompleteFetchSuccessActionType=>{
    return {
        type:Types.IncompleteFetchSuccess,
        payload:data
    }
}

