export interface IFormInput {
    applicationTypeId: string,
}

export interface INewAppState {    
        applicationNumber?: number,
        userId?: number,
        applicationStatusId?: number,
        applicationTypeId?: number,
        applicationDate?: Date,
        isActive?: boolean,
        remark?: string,
        stepNo?: number
}

export const CreateRequest = 'NEWAPP/CREATE';
export interface CreateRequestActionType {
    type: typeof CreateRequest,
    payload:IFormInput
}

export const CreateSuccess = 'NEWAPP/CREATE_SUCCESS';
export interface CreateSuccessActionType {
    type: typeof CreateSuccess,
    payload:INewAppState
}

export const IncompleteFetchRequest = 'NEWAPP/FETCH';
export interface FetchIncompleteActionType {
    type: typeof IncompleteFetchRequest
}

export const IncompleteFetchSuccess = 'NEWAPP/FETCH_SUCCESS';
export interface IncompleteFetchSuccessActionType {
    type: typeof IncompleteFetchSuccess,
    payload:INewAppState
}





export type NewAppActionsTypes =CreateRequestActionType|CreateSuccessActionType|
                                FetchIncompleteActionType|IncompleteFetchSuccessActionType;



