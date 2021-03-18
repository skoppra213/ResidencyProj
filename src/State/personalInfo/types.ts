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

export const IncompleteFetchRequest = 'PERSONALINFO/FETCH';
export interface FetchIncompleteActionType {
    type: typeof IncompleteFetchRequest
}

export const IncompleteFetchSuccess = 'PERSONALINFO/FETCH_SUCCESS';
export interface IncompleteFetchSuccessActionType {
    type: typeof IncompleteFetchSuccess,
    payload:IState
}


export type NewAppActionsTypes =CreateRequestActionType|CreateSuccessActionType|
                                FetchIncompleteActionType|IncompleteFetchSuccessActionType;



