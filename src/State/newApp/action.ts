import * as NewAppTypes from "./types"

export const getCreateRequest = (data:NewAppTypes.INewAppState):NewAppTypes.CreateRequestActionType=>{
    return {
        type:NewAppTypes.CreateRequest,
        payload:data
    }
}

export const getCreateSuccess = (data:NewAppTypes.INewAppState):NewAppTypes.CreateSuccessActionType=>{
    return {
        type:NewAppTypes.CreateSuccess,
        payload:data
    }
}

export const getFetchIncompleteRequest = ():NewAppTypes.FetchIncompleteActionType=>{
    return {
        type:NewAppTypes.IncompleteFetchRequest,
    }
}

export const getFetchIncompleteSuccess = (data:NewAppTypes.INewAppState):NewAppTypes.IncompleteFetchSuccessActionType=>{
    return {
        type:NewAppTypes.IncompleteFetchSuccess,
        payload:data
    }
}

