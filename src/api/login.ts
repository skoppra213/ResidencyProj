import ErrorInfo from "../types/errorInfo";
import { API_AUTHENTICATE } from "./Urls";


export const login = async (username: string, password: string): Promise<any> => {

  let result = await fetch(API_AUTHENTICATE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  });

  if (result.ok)
  {
    return await result.json();
  }
  else{
    let err :ErrorInfo  = (await  result.json());
    return {
      status: 0,
      message: err.message
    }
  }

};


// export const login = async () =>{
//  let res = await fetch("http://localhost:25004/api/GeneralSettings");
//  let result = await res.json();
//  console.log("result",result);
// }
