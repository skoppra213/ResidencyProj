import ErrorInfo from "./errorInfo";

 export class UserInfo {

   /* Singleton pattern */
   
   /* private static instance: UserInfo;
    private constructor(){}
    public static getInstance(): UserInfo {
        if (!UserInfo.instance) {
            UserInfo.instance = new UserInfo();
        }

        return UserInfo.instance;
    }
    */

    userId: number = 0 ;
    mobileNumber?: string ;
    email: string  = "";
    residencyByMoa: boolean = false ;
    isSapUser: boolean = false ;
    civilId: string  = "";
    employeeNumber?: string ;
    employeeName: string  = "";
    employeeType?: string ;
    sector?: string ;
    department?: string ;
    section?: string ;
    nationality: string  = "";
    birthDate?: Date ;
    jobTitle?: string ;
    organization?: string ;
    userTypeId: number  = 0;
    registrationStatusId: number = 0;
    isLoggedIn: boolean = false;
    hasError:boolean = false;
    error: ErrorInfo = new ErrorInfo();
}


export const userInfo = new UserInfo();