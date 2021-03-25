import * as lookUpActions from "./types"
import {SelectOptions} from "../../types/UIRelated"

export const setLoading = (isLoading:boolean): lookUpActions.LoadingActionType => {
    return {
        type: lookUpActions.Loading,
        payload: isLoading
    }
}
export const getAppTypesRequest = ():lookUpActions.AppTypesActionsTypes=>{
    return {
        type:lookUpActions.AppTypes_request
    }
}

export const getAppTypesSuccess = (options: SelectOptions[]): lookUpActions.AppTypesActionsTypes => {
    return {
        type: lookUpActions.AppTypes_Success,
        payload: options
    }
}

export const getNationalitiesRequest = ():lookUpActions.NationalitiesActionsTypes=>{
    return {
        type:lookUpActions.Nationalities_request
    }
}

export const getNationalitiesSuccess = (options: SelectOptions[]): lookUpActions.NationalitiesActionsTypes => {
    return {
        type: lookUpActions.Nationalities_Success,
        payload: options
    }
}

