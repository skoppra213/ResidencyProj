import {SelectOptions} from "../types/UIRelated";
export class RegisterRequest {
    email: string = "";
    password: string = "";
    civilId: string = "";
    employeeName: string = "";
    nationalityId?: string = "";
    jobTitle: string = "";
    userTypeId: number = 0;
    employeeType?: string = "";
    organization: string = "";
    mobileNumber: string = "";
    employeeNumber: string = "";
    birthDate?: Date;
    hireDate?: Date;
}

export class RegisterRequestModel {
    email: string = "";
    password: string = "";
    civilId: string = "";
    employeeName: string = "";
    nationalityId?: SelectOptions|undefined;
    jobTitle: string = "";
    userTypeId: number = 0;
    employeeType?: SelectOptions|undefined;
    organization: string = "";
    mobileNumber: string = "";
    employeeNumber: string = "";
    birthDate?: Date;
    hireDate?: Date;
}