export interface IPersonalInfo  {    
    id:number,  
    employeeNumber:number,  
    employeeNameArabic:string,
    employeeNameEnglish:string,  
    birthDate:Date,
    mobileNumber:number,  
    department:string, 
    jobTitle?:string,  
    hireDate?:Date,  
    applicationNumber?:number,    
    userId?:number,    
    createdDate?:Date, 
    updatedDate?:Date
}