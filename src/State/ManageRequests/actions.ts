import * as ManageRequestsTypes from "./types";


export const CreateRequest=(data:any):ManageRequestsTypes.ManageRequestsCREATE=>{
    return {
        type:ManageRequestsTypes.CreateRequest,
        payload:data
    }

}
export const CreateRequestAdmin=():ManageRequestsTypes.ManageRequestsCREATEAdmin=>{
    return {
        type:ManageRequestsTypes.CreateRequestAdmin
    }

}

export const RequestSuccess=(data:ManageRequestsTypes.IRequests[]):ManageRequestsTypes.ManageRequestsSuccess=>{
    return {
        type:ManageRequestsTypes.RequestSuccess,
        payload:data
    }

}

export const RequestError=(data:any):ManageRequestsTypes.ManageRequestsError=>{
    return {
        type:ManageRequestsTypes.RequestError,
        payload:data
    }

}
export const SelectedRequest=(data:ManageRequestsTypes.IRequests):ManageRequestsTypes.ManageSelectedRequest=>{
    return {
        type:ManageRequestsTypes.SelectedRequest,
        payload:data
    }

}

export const DeleteRequest=(data:ManageRequestsTypes.IRequests):ManageRequestsTypes.ManageDeleteRequest=>{
    return {
        type:ManageRequestsTypes.DeleteRequest,
        payload:data
    }

}