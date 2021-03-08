import * as lookUpActions from "./types"
import {SelectOptions} from "../../types/UIRelated"


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


