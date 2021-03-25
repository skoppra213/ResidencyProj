import {PERSONAL_INFO_CREATE } from "./Urls";
import {IState} from "../State/personalInfo";

export const createPersonalInfo = async (data:IState): Promise<IState> => {
  
    console.log("in create personal service", {...data}); 
  
    try {
      let response = await fetch(PERSONAL_INFO_CREATE, {
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
      let temp:IState = await response.json();
      console.log("after calling service",temp);
    return temp;
    } catch (e) {
      console.log("NET error");
      return data
    //   return { ...authenticateResponse, status: 500, message: e, hasError: true }
    }
  }