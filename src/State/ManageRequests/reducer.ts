import * as Types from "./types";


const initialState:Types.IRequestsState={
    IRequests:[],
    SelectedRequest:{
         applicationNumber:undefined,
         applicationDate:undefined,
         applicationStatusId:undefined,
         applicationStatusName:undefined,
         applicationTypeId:undefined,
         applicationTypeName:undefined,
         isActive:undefined,
         remark:undefined,
         stepName:undefined,
         stepNo:undefined,
         userId:undefined,
          UserName:undefined,
          CivilId:undefined
    }
    
}

   
 export  function ManageRequestsReducer(state:Types.IRequestsState=initialState,actions:Types.ManageRequestsActionsTypes):Types.IRequestsState
{
         switch (actions.type) {

                 case Types.RequestSuccess:
                    var Dstate=state;
                    Dstate.IRequests=actions.payload
                    localStorage.setItem("IRequestsState", JSON.stringify({ ...state,IRequests:actions.payload ,SelectedRequest:initialState.SelectedRequest }));
                  return{
                    ...state,
                      IRequests:actions.payload,
                     SelectedRequest:initialState.SelectedRequest
                  }
                
         
             default:
                let localStorageData:any = localStorage.getItem('IRequestsState');
                if (localStorageData) {
                    localStorageData = JSON.parse(localStorageData);
                    return {
                        ...state,
                        IRequests:localStorageData.IRequests,
                        SelectedRequest:localStorageData.SelectedRequest
                    }
                }
                return state

         }




}



export default ManageRequestsReducer;