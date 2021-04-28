export enum UserType{
    a,b,c
};

export enum Steps {
    CreateApp = 0,
    PersonalInfo = 1,
    PassportInfo = 2,
    Attachments = 3,
    TermsAndConditions = 4,
    RequestSent = 5
}

export enum ApplicationTypes {
    ResidencyRenewal = 1,
    InformationTransfer = 2,
    UpdateData = 3,
    CancelResidency = 4,
    ResidencyExtension = 5
}

export enum StatusType {
    	Approved=1,
    	Rejected=2,
    	Return=3,
    	Pending=5,
    	Creation=6,
}


export enum  ErrorMessages {
    required="برجاء ادخال هدا الحقل",
     Select="برجاء الاختيار",
    MaxWidth="المساحة القسوى المسموح بها 1 ميجا بيت",
}