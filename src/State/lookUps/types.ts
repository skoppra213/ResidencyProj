import {SelectOptions} from "../../types/UIRelated"

export const AppTypes_request = 'LOOKUP/APPTYPE_REQUEST';
export interface appTypes_request_action_type {
    type: typeof AppTypes_request   
}

export const AppTypes_Success = 'LOOKUP/APPTYPE_SUCCESS';
export interface appTypes_Success__action_type {
    type: typeof AppTypes_Success,
    payload:SelectOptions[]
}


export interface ILookUpState {
    AppTypes?:SelectOptions[]
}

export type AppTypesActionsTypes = appTypes_request_action_type|appTypes_Success__action_type;


export type LookUpActionTypes = AppTypesActionsTypes;