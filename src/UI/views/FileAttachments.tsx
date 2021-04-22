import React,{useEffect,useState} from 'react'
import Layout from "../components/Layout";
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { IState,IFileAttachment } from "../../State/attachmentDocuments";
import { RootState } from '../../State/rootReducer';
import { useHistory } from "react-router-dom";
import { Steps } from "../../types/Enums";
import { getFetchIncompleteRequest,getUpdateRequest } from "../../State/newApp";
import {getCreateRequest,getFetchRequest as fetchAttachment,getUpdateRequest as updateAttachment} from "../../State/attachmentDocuments";


type TempFormData = {
    ApprovedLetterForResidencyRenewal: FileList;
    SalaryCertification: FileList;
    CivilIdCopy: FileList;
    PassportCopy: FileList;
    OtherRelatedDocuments: FileList;
}

function FileAttachments() {
    const newAppState = useSelector<RootState, RootState["newApp"]>(state => state.newApp);
    const loginData = useSelector<RootState, RootState["login"]>(state => state.login);
    const stateData = useSelector<RootState,RootState["attachmentInfo"]>(state => state.attachmentInfo);
    const { register, handleSubmit, watch, errors, setValue, getValues, control } = useForm<IState>();
    const history = useHistory();
    const {userInfo} = loginData;
    const [removeletter, setRemoveletter] = useState(true);
    const [removeSalary, setremoveSalary] = useState(true);
    const [removeCivilId, setremoveCivilId] = useState(true);
    const [removePassport, setremovePassport] = useState(true);
    const [removeOtherDocs, setRemoveOtherDocs] = useState(true);
    const [Direction, setDirection] = useState<string>("");

    let dispatch = useDispatch();

    useEffect(() => {
        if (newAppState.IState.applicationNumber === undefined) {
           dispatch(getFetchIncompleteRequest(userInfo?.userId as number));
        }
      }, []);

      useEffect(() => {
        console.log("in useeffect/newAppState.stepNo out");
        if (newAppState.IState.stepNo as number  >= Steps.Attachments) {
            dispatch(fetchAttachment(newAppState.IState.applicationNumber as number));
            console.log("in useeffect/newAppState.stepNo");
       }
      }, [newAppState.IState.stepNo]);

      useEffect(() => {
          console.log("in use Effec t");
       if (stateData.approvedLetterForResidencyRenewal)
       {console.log("approvedLetterForResidencyRenewal");setRemoveletter(false);} 
       if (stateData.salaryCertification) setremoveSalary(false);
       if (stateData.civilIdCopy) setremoveCivilId(false);
       if (stateData.passportCopy) setremovePassport(false);
       if (stateData.otherRelatedDocuments) setRemoveOtherDocs(false);

      }, [stateData]);

    const onSubmit = async (data: TempFormData) => {

        const postData: IFileAttachment = {};
        postData.ApplicationNumber = newAppState.IState.applicationNumber;
        postData.UserId = userInfo?.userId;

        if(stateData.id ===undefined ||stateData.id===0)
        {
          postData.CreatedDate = new Date();
          postData.ApprovedLetterForResidencyRenewal = data.ApprovedLetterForResidencyRenewal[0];
          postData.SalaryCertification = data.SalaryCertification[0];
          postData.CivilIdCopy = data.CivilIdCopy[0];
          postData.PassportCopy = data.PassportCopy[0];
          postData.OtherRelatedDocuments = data.OtherRelatedDocuments[0];
          console.log("postData", postData);
          dispatch(getCreateRequest(postData));
          newAppState.IState.stepNo =Steps.Attachments;
          dispatch(getUpdateRequest(newAppState.IState));
         
        }
       else
       {
        postData.id = stateData.id;
        if (data.ApprovedLetterForResidencyRenewal.length>0)
         postData.ApprovedLetterForResidencyRenewal = data.ApprovedLetterForResidencyRenewal[0];
         if (data.SalaryCertification.length>0)
         postData.SalaryCertification = data.SalaryCertification[0];
         if (data.CivilIdCopy.length>0)
         postData.CivilIdCopy = data.CivilIdCopy[0];
         if (data.PassportCopy.length>0)
         postData.PassportCopy = data.PassportCopy[0];
         if (data.OtherRelatedDocuments.length>0)
         postData.OtherRelatedDocuments = data.OtherRelatedDocuments[0];
         console.log("postData",postData);
         dispatch(updateAttachment(postData));
        
       }
       if(Direction=="fwd")
       {
       history.push("/Agreament");

       }
       else if(Direction=="bwd")
       {
       history.push("/passportinfo");
       }
    }
    return (

            <main className="login-bg">
                <div className="container" style={{ marginBottom: '80px' }}>
                    {/* Outer Row */}
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{ border: '1px solid rgb(189, 189, 189)' }}>
                                <div className="card-header bg-dark">
                                    <div className="text-center">
                                        <h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: '28px' }}>معاملة تجديد اقامة - المرفقات
                                         </h1>
                                    </div>
                                </div>
                                <div className="card-body p-0 ">
                                    {/* Nested Row within Card Body */}
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="p-5">
                                                <form className="user" onSubmit={handleSubmit(onSubmit)}>
                                                    {/* ################### form- row-001 #################*/}
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">رقم الموظف</label>
                                                        <div className="col-sm-3">
                                                            <input type="text" className="form-control form-control-user" />
                                                        </div>
                                                    </div>
                                                    {/* ################### form- row-002 #################*/}
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">كتاب الادارة بالموافقة عل المعاملة</label>
                                                    
                                                        <div className="col-sm-8">
                                                            <input type="file" className="form-control form-control-user" hidden={!removeletter}
                                                                name="ApprovedLetterForResidencyRenewal" ref={register} />
                                                            {(stateData.approvedLetterForResidencyRenewal && !removeletter) &&
                                                                <>
                                                                    <a href={stateData.approvedLetterForResidencyRenewal} target="blank" >
                                                                        Uploaded Approval Letter</a>
                                                                    <button onClick={() => setRemoveletter(true)}>Edit</button>
                                                                </>
                                                            }
                                                        </div>
                                                     
                                                       
                                                    </div>
                                                    {/* ################### form- row-003 #################*/}
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">شهادة الراتب</label>
                                                        <div className="col-sm-8">
                                                            <input type="file" className="form-control form-control-user" hidden={!removeSalary}
                                                                name="SalaryCertification" ref={register} />
                                                                  {(stateData.salaryCertification && !removeSalary)&&
                                                                  <>
                                                                <a href={stateData.salaryCertification} target="blank">
                                                                    Uploaded Salary Certificate</a>
                                                                    <button onClick={() => setremoveSalary(true)}>Edit</button>
                                                                    </>
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* ################### form- row-004 #################*/}
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">صورة البطاقة المدنية</label>
                                                        <div className="col-sm-8">
                                                            <input type="file" className="form-control form-control-user" hidden={!removeCivilId}
                                                                name="CivilIdCopy" ref={register} />
                                                                        {(stateData.civilIdCopy &&!removeCivilId)&&
                                                                        <>
                                                                <a href={stateData.civilIdCopy} target="blank">
                                                                    Uploaded civilId Copy </a>
                                                                    <button onClick={() => setremoveCivilId(true)}>Edit</button>
                                                                    </>
                                                                    
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* ################### form- row-005 #################*/}
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">صورة الجواز</label>
                                                        <div className="col-sm-8">
                                                            <input type="file" className="form-control form-control-user" hidden={!removePassport}
                                                                name="PassportCopy" ref={register} />
                                                              
                                                            {(stateData.passportCopy && !removePassport)&&
                                                            <>
                                                                <a href={stateData.passportCopy} target="blank">
                                                                    Uploaded passport Copy  </a>
                                                                          <button onClick={() => setremovePassport(true)}>Edit</button>
                                                                      </>
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* ################### form- row-006 #################*/}
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">مستندات اخرى</label>
                                                        <div className="col-sm-8">
                                                            <input type="file" className="form-control form-control-user"  hidden={!removeOtherDocs}
                                                                name="OtherRelatedDocuments" ref={register} />
                                                                   {(stateData.otherRelatedDocuments && !removeOtherDocs) &&
                                                                   <>
                                                                <a href={stateData.otherRelatedDocuments} target="blank">
                                                                    Uploaded otherRelatedDocuments   </a>
                                                                    <button onClick={() => setRemoveOtherDocs(true)}>Edit</button>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* ################# submit btn ##################### */}
                                                    <div  className="row justify-content-between"> 
                          <button type="submit" className="btn btn-primary btn-user shorooq  " onClick={()=> {setDirection("bwd");  }} style={{ fontSize: '22px' }}>
                          
                          <a   className="btn btn-primary btn-user shorooq  " style={{ fontSize: '22px' }}>
                            السابق
                            </a>
                            </button>

                            <button type="submit" className="btn btn-primary btn-user shorooq  " onClick={()=> {setDirection("fwd");  }} style={{ fontSize: '22px' }}>
                            <a  className="btn btn-primary btn-user shorooq  " style={{ fontSize: '22px' }}>التالي
                          </a>
                            </button>
                          </div>
                                                    {/* ################# end submit btn ##################### */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></main>

    )
}

export default FileAttachments
