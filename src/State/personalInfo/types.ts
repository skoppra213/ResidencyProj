import {IPersonalInfo} from "../../types";

export interface IState extends IPersonalInfo{

}

export const CreateRequest = 'PERSONALINFO/CREATE';
export interface CreateRequestActionType {
    type: typeof CreateRequest,
    payload:IState
}

export const CreateSuccess = 'PERSONALINFO/CREATE_SUCCESS';
export interface CreateSuccessActionType {
    type: typeof CreateSuccess,
    payload:IState
}

export const FetchRequest = 'PERSONALINFO/FETCH';
export interface FetchActionType {
    type: typeof FetchRequest,
    payload:number
}

export const FetchSuccess = 'PERSONALINFO/FETCH_SUCCESS';
export interface FetchSuccessActionType {
    type: typeof FetchSuccess,
    payload:IState
}

export const UpdateRequest = 'PERSONALINFO/UPDATE';
export interface UpdateActionType {
    type: typeof UpdateRequest,
    payload:IState
}

export const UpdateSuccess = 'PERSONALINFO/UPDATE_SUCCESS';
export interface UpdateSuccessActionType {
    type: typeof UpdateSuccess,
    payload:IState
}


export type NewAppActionsTypes = CreateRequestActionType | CreateSuccessActionType |
                                    FetchActionType | FetchSuccessActionType |
                                    UpdateActionType | UpdateSuccessActionType;



