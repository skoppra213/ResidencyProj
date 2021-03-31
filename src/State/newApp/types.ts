

import {INewAppState} from "../../types/newApp"

export interface IState extends INewAppState{

}

export const CreateRequest = 'NEWAPP/CREATE';
export interface CreateRequestActionType {
    type: typeof CreateRequest,
    payload:IState
}

export const CreateSuccess = 'NEWAPP/CREATE_SUCCESS';
export interface CreateSuccessActionType {
    type: typeof CreateSuccess,
    payload:IState
}

export const IncompleteFetchRequest = 'NEWAPP/FETCH';
export interface FetchIncompleteActionType {
    type: typeof IncompleteFetchRequest,
    payload:number
}

export const IncompleteFetchSuccess = 'NEWAPP/FETCH_SUCCESS';
export interface IncompleteFetchSuccessActionType {
    type: typeof IncompleteFetchSuccess,
    payload:IState
}

export const UpdateRequest = 'NEWAPP/UPDATE';
export interface UpdateActionType {
    type: typeof UpdateRequest,
    payload:IState
}

export const UpdateSuccess = 'NEWAPP/UPDATE_SUCCESS';
export interface UpdateSuccessActionType {
    type: typeof UpdateSuccess,
    payload:IState
}




export type NewAppActionsTypes =CreateRequestActionType|CreateSuccessActionType|
                                FetchIncompleteActionType|IncompleteFetchSuccessActionType|
                                UpdateActionType|UpdateSuccessActionType;



