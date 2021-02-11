import { authenticateResponse } from "../types/userInfo";
import { API_AUTHENTICATE } from "./Urls";


export const login = async (username: string, password: string): Promise<any> => {

  try {
    let response = await fetch(API_AUTHENTICATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    if (!response.ok) {
      console.log("res NOT ok");
      return { ...authenticateResponse, status: response.status, message: response.statusText, hasError: true }
    }

    console.log("res OK");
    return await response.json();

  } catch (e) {
    console.log("NET error");
    
    return { ...authenticateResponse, status: 500, message: e, hasError: true }
  }




};


