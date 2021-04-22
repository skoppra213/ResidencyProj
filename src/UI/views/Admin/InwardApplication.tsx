import * as React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../../State/rootReducer"
import {TableBootStrap,columnsBootStrap} from "../../components/Datatables"
import Layout from "../../components/Layout";
import NoData from "../../views/NoData";
import { IRequests, IRequestsState } from '../../../State/ManageRequests/types';
import * as actions from "./../../../State/ManageRequests/actions"
export default function InwardApplication () {

     const RequestsState:IRequestsState = useSelector<RootState,RootState["manageRequest"]>(state => state.manageRequest);
     const {userInfo} = useSelector<RootState,RootState["login"]>(state => state.login) ;
     const {IRequests} = RequestsState;
     const {SelectedRequest}=RequestsState;
    let dispatch = useDispatch();
    //Table boot strap input {columns,handel pop up function its (ref) function}
type handleRowFunctions = React.ElementRef<typeof TableBootStrap>;
const handleRowFunctionsref = React.useRef<handleRowFunctions>(null);
let columnsBootStrap_: columnsBootStrap={columns:[],data:null};
  columnsBootStrap_.columns=[
    {
      text: "رقم المعاملة",
      dataField: "applicationNumber"
    },
    {
        text: "رقم الموظف",
        dataField: "civilId"
    },
    {
        text: "رقم الموظف",
        dataField: "UserName"
    },
    {
        text: "حالة الطلب",
        dataField: "applicationStatusName"
    },
    {
        text: "نوع الطلب",
        dataField: "applicationTypeName"
    },
    {
        text: "تاريخ الطلب",
        dataField: "applicationDate",
        formatter:(row:any,cell:any)=> <span> {new Date(cell.applicationDate).toLocaleDateString('ar-EG-u-nu-latn',{weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'})}   </span>
    },
    {
        text: "طباعه",
        formatter: (row:any,cell:any) => <button  className="btn btn-primary btn-sm  rounded-circle"   onClick={()=>handleRowFunctionsref.current?.handlePopUp(cell)}><i className="fa fa-eye"aria-hidden="true"></i></button>
    }
    ,
    {
        text: "عرض",
        formatter:(row:any,cell:any) => <button className="btn btn-warning btn-sm  rounded-circle" disabled={!cell.isActive}  onClick={()=>handleRowFunctionsref.current?.EditRowAdmin(cell)} ><i className="fas fa-edit"aria-hidden="true"/></button>
    },
    {
        text: "اعتماد",
        formatter:(row:any,cell:any) => <button className="btn btn-warning btn-sm  rounded-circle" disabled={cell.isActive}  onClick={()=>handleRowFunctionsref.current?.EditRow(cell)} ><i className="fas fa-edit"aria-hidden="true"/></button>
    },
    {
        text: "رفض",
        formatter:(row:any,cell:any) => <button className="btn btn-warning btn-sm  rounded-circle" disabled={cell.isActive}  onClick={()=>handleRowFunctionsref.current?.EditRow(cell)} ><i className="fas fa-times-square" aria-hidden="true"></i></button>
    }
    ,
    {
        text: "اعاده",
        formatter:(row:any,cell:any) => <button className="btn btn-warning btn-sm  rounded-circle" disabled={cell.isActive}  onClick={()=>handleRowFunctionsref.current?.EditRow(cell)} ><i className="fas fa-edit"aria-hidden="true"/></button>
    }


  ];
  columnsBootStrap_.data=IRequests;
  React.useEffect(() => {
    console.log("userId",userInfo?.userId);
      //dispatch(actions.CreateRequest(userInfo?.userId));
      dispatch(actions.CreateRequestAdmin());
      console.log(IRequests);
   }, []);
  return (
    <div>
    {userInfo?.userId != 0 && <TableBootStrap   ref={handleRowFunctionsref}  data={columnsBootStrap_.data} columns={columnsBootStrap_.columns}  />}
    {(userInfo?.userId == 0 || IRequests.length==0) && <NoData Message="لا يوجد معاملات سابقة  "/>}
    {/* {( IRequests.length !=0) && <TableBootStrap   ref={handleRowFunctionsref}  data={columnsBootStrap_.data} columns={columnsBootStrap_.columns}  />} */}
    </div>
  );
}
