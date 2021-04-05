import {IState,IFileAttachment} from "../State/attachmentDocuments";

const url="https://localhost:44367/api/AttachmentDocument";



export const createAttachemnt = async (data:IFileAttachment) => {
  
    console.log("in attachments service", {...data}); 

    var postData = new FormData()
    postData.append('ApprovedLetterForResidencyRenewal', data.ApprovedLetterForResidencyRenewal as File);
    postData.append('SalaryCertification', (data.SalaryCertification  as File));
    postData.append('CivilIdCopy', (data.CivilIdCopy as File));
    postData.append('PassportCopy', (data.PassportCopy  as File));
    postData.append('OtherRelatedDocuments', (data.OtherRelatedDocuments as File));
    postData.append("ApplicationNumber",data.ApplicationNumber?.toString() as string);
    postData.append("UserId",data.UserId?.toString() as string);

  
    try {
      let response = await fetch(url, {
        method: 'POST',
        body: postData
      });
      if (!response.ok) {

       }
      let temp = await response.json();
      console.log("temp",temp);

    return temp;
    } catch (e) {
      console.log("NET error",e);
      return data

    }
  }

  export const fetchAttachemnt = async (appNum:number) => {
  
    console.log("in attachments service", appNum); 
    let res :IState ={};
    try {
      let urlf = `${url}/${appNum}`;
      let response = await fetch(urlf, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      });
      
      if (!response.ok) {

       }
      let temp:IState = await response.json();
      console.log("from Fetch service",temp);
      

      return temp;
  
    } catch (e) {
      console.log("NET error incomp",e);
      return res
   
    }


  }

  export const updateAttachment = async (data:IState): Promise<IState> => {
    let res :IState ={};
    try {
      console.log("data",data);
      let urlf = `${url}/${data.id}`;
      let response = await fetch(urlf, {
        method: 'PUT',
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
      console.log("UPDATE Fetch service",temp);
      

      return temp;
  
    } catch (e) {
      console.log("NET error incomp",e);
      return res
   
    }
  } 