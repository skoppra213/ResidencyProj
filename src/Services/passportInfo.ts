import {PASSPORT_INFO_CREATE } from "./Urls";
import {IState} from "../State/personalInfo";

export const createPassportInfo = async (data:IState): Promise<IState> => {
  
    console.log("in create passport service", {...data});
  
    let n=
    {
      "id": 5,
      "civilId": 444444,
      "nationalityId": "ff",
      "passportNumber": "fff",
      "issueCountry": "string",
      "issueDate": "2021-03-24T09:07:41.514Z",
      "expiryDate": "2021-03-24T09:07:41.514Z",
      "address": "string",
      "residencyExpiryDate": "2021-03-24T09:07:41.514Z",
      "applicationNumber": 0,
      "userId": 9,
      "createdDate": "2021-03-24T09:07:41.514Z",
      "updatedDate": "2021-03-24T09:07:41.514Z"
    }

    console.log("in service n",n);
    try {
      let response = await fetch(PASSPORT_INFO_CREATE, {
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

    return temp;
    } catch (e) {
      console.log("NET error");
      return data
    //   return { ...authenticateResponse, status: 500, message: e, hasError: true }
    }
  }