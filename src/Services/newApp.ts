import {NEWAPP_CREATE } from "./Urls";
import {INewAppState} from "../State/newApp";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../State/rootReducer' ;

export const createNewApp = async (data:INewAppState): Promise<INewAppState> => {
    console.log("in create newApp service",data);

    try {
      let response = await fetch(NEWAPP_CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         ...data
        })
      });
      if (!response.ok) {
        // return { ...authenticateResponse, status: response.status, message: response.statusText, hasError: true }
      }
      let temp:INewAppState = await response.json();
      let res :INewAppState = 
              {applicationDate:temp.applicationDate,
              applicationNumber : temp.applicationNumber,
               applicationStatusId:temp.applicationStatusId,
               applicationTypeId:temp.applicationTypeId,
               isActive:temp.isActive,
               remark:temp.remark,
               stepNo:temp.stepNo,
               userId:temp.userId
            }
      console.log("response ",res);
      return res;
  
    } catch (e) {
      console.log("NET error");
      return data
    //   return { ...authenticateResponse, status: 500, message: e, hasError: true }
    }
  }