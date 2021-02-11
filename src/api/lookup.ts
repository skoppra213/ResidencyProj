import {GET_NATIONALITIES,GET_USERTYPES } from "./Urls";
import {assignToTypeArray} from "../utils/assignType";
import {Nationality,UserType} from "../types/lookUpTypes";

export const getNationalities = async ():Promise<Nationality[]> =>{
    let response = await fetch(GET_NATIONALITIES, { 
        headers: {
          'Content-Type': 'application/json'
        }      
      });
      let data = await response.json();     
      let nationalities = new Array<Nationality>();
      nationalities = assignToTypeArray<Nationality>(data, new Nationality(),nationalities);
      return nationalities;
}

export const getUserTypes = async ():Promise<UserType[]> =>{
    let response = await fetch(GET_USERTYPES, { 
        headers: {
          'Content-Type': 'application/json'
        }      
      });
      let data = await response.json();     
      let userTypes = new Array<UserType>();
      userTypes = assignToTypeArray<UserType>(data, new UserType(),userTypes);
      return userTypes;
}