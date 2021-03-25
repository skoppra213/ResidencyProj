import {IPassportInfo} from "../../types";

export interface IState extends IPassportInfo{

}

export const CreateRequest = 'PASSPORTINFO/CREATE';
export interface CreateRequestActionType {
    type: typeof CreateRequest,
    payload:IState
}

export const CreateSuccess = 'PASSPORTINFO/CREATE_SUCCESS';
export interface CreateSuccessActionType {
    type: typeof CreateSuccess,
    payload:IState
}

export const IncompleteFetchRequest = 'PASSPORTINFO/FETCH';
export interface FetchIncompleteActionType {
    type: typeof IncompleteFetchRequest
}

export const IncompleteFetchSuccess = 'PASSPORTINFO/FETCH_SUCCESS';
export interface IncompleteFetchSuccessActionType {
    type: typeof IncompleteFetchSuccess,
    payload:IState
}


export type ActionsTypes =CreateRequestActionType|CreateSuccessActionType|
                                FetchIncompleteActionType|IncompleteFetchSuccessActionType;



