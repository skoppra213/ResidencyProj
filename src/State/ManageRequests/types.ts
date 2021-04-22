
export interface IRequests
{
    applicationNumber?: number,
    userId?: number,
    applicationStatusId?: number,
    applicationStatusName?:string,
    applicationTypeId?: number,
    applicationTypeName?:string,
    applicationDate?: Date,
    isActive?: boolean,
    remark?: string,
    stepNo?: number,
    stepName?:string,
    CivilId?:number,
    UserName?:string
}

export interface IRequestsState
{
    IRequests:IRequests[],
    SelectedRequest:IRequests
}

export const CreateRequest="MANAGEREQUESTS_CREATE";
export const CreateRequestAdmin="MANAGEREQUESTS_ADMIN_CREATE";
export const DeleteRequest="MANAGEREQUESTS_DELETE";
export const RequestSuccess="MANAGEREQUESTS_SUCCESS";
export const RequestError="MANAGEREQUESTS_ERROR";
export const SelectedRequest="MANAGEREQUESTS_SELECTEDREQUEST";

export  interface ManageRequestsCREATE
{
    type: typeof CreateRequest;
    payload:any
   
}export  interface ManageRequestsCREATEAdmin
{
    type: typeof CreateRequestAdmin;
   
}
export  interface ManageRequestsSuccess
{
    type: typeof RequestSuccess;
    payload: IRequests[]
}

export  interface ManageRequestsError
{
    type: typeof RequestError;
    payload: any
}


export  interface ManageSelectedRequest
{
    type: typeof SelectedRequest;
    payload: IRequests
}


export  interface ManageDeleteRequest
{
    type: typeof DeleteRequest;
    payload: any
}


export type ManageRequestsActionsTypes =ManageRequestsError|ManageRequestsSuccess|ManageRequestsCREATE|ManageSelectedRequest