import {SelectOptions} from "../types/UIRelated";
export class RegisterRequest {
    email: string = "";
    password: string = "";
    civilId: string = "";
    employeeName: string = "";
    nationalityId?: string = "";
    jobTitle: string = "";
    userTypeId?: string = "";
    employeeType?: string = "";
    organization: string = "";
    mobileNumber: string = "";
    employeeNumber: string = "";

}

export class RegisterRequestModel {
    email: string = "";
    password: string = "";
    password_repeat: string = "";
    civilId: string = "";
    employeeName: string = "";
    nationalityId?: SelectOptions|undefined = new SelectOptions();
    jobTitle: string = "";
    userTypeId?:SelectOptions|undefined;
    employeeType?: string = "";
    organization: string = "";
    mobileNumber: string = "";
    employeeNumber: string = "";
    isMOA?: boolean=false;

}