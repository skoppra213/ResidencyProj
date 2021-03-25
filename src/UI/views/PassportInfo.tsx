import React,{useState,useEffect} from 'react'
import Layout from "../components/Layout";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import {IState} from "../../State/passportInfo";
import {SelectOptions} from "../../types/UIRelated"
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../State/rootReducer";
import { assignToType} from "../../Services/utils/assignType";
import {getCreateRequest} from "../../State/passportInfo";
import {getNationalitiesRequest,setLoading} from "../../State/lookUps";


export interface IFormData extends IState {
  selectedNationality?:SelectOptions,
  selectedIssueCountry?:SelectOptions
  }


class TempClass implements IState{
  id?:number ;
  civilID?:number;  
  nationalityId?:string;
  passportNumber?:number;
  issueCountry?:string;
  issueDate?:Date;
  expiryDate?:Date;
  address?:string; 
  residencyExpiryDate?:Date; 
  applicationNumber?:number;    
  userId?:number;    
  createdDate?:Date; 
  updatedDate?:Date;


}
const PassportInfo = () => {


  const { register, handleSubmit,  errors,control } = useForm<FormData>();
  const LookUpState = useSelector<RootState,RootState["lookUp"]>(state => state.lookUp);
  const stateData = useSelector<RootState,RootState["passportInfo"]>(state => state.passportInfo);
  const {Nationalities} = LookUpState;
  let dispatch = useDispatch();

  useEffect(() => {
    const GetDropdownValues = async () => {
      if (Nationalities === undefined) {
        dispatch(getNationalitiesRequest());
      }
    };
    GetDropdownValues();

  }, []);

  const onSubmit = async (data:IFormData) => {
    console.log("data on submit",data);
    console.log("stateData",stateData); 
    let res  = new TempClass();
    res = assignToType(data,res); 
    console.log("res on submit",res);
    res.nationalityId=data.selectedNationality?.value;
    res.issueCountry = data.selectedIssueCountry?.value;
    res.applicationNumber=15;
    res.userId=5;
    res.createdDate = new  Date();
    // res.employeeNumber = Number(data.employeeNumber);
    console.log("res on after the selected  submit",res);
    dispatch(getCreateRequest(res));
  }
    return (
        <Layout>
        <main className="login-bg">
        <div className="container" style={{marginBottom: '80px'}}>
          {/* Outer Row */}
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{border: '1px solid rgb(189, 189, 189)'}}>
                <div className="card-header bg-dark">
                  <div className="text-center">
                    <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: '28px'}}>معاملة تجديد اقامة - بيانات
                      الجواز والاقامة</h1>
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
                            <label  className="col-sm-3 col-form-label">رقم الموظف</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                          </div>
                          {/* ################### form- row-002 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">الرقم المتسلسل</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label  className="col-sm-3 col-form-label">الجنسية</label>
                            <div className="col-sm-3">
                                <Controller
                                  name="selectedNationality"
                                  control={control}
                                  placeholder=" اختر الادار  "
                                  options={Nationalities}
                                  as={Select}
                                />
                            </div>
                          </div>
                          {/* ################### form- row-003 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">رقم الجواز</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user"  
                              name="passportNumber" ref={register} />
                            </div>
                            <label  className="col-sm-3 col-form-label">مكان الاصدار</label>
                            <div className="col-sm-3">

                               <Controller
                                  name="selectedIssueCountry"
                                  control={control}
                                  placeholder=" اختر الادار  "
                                  options={Nationalities}
                                  as={Select}
                                />
                            </div>
                          </div>
                          {/* ################### form- row-004 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">تاريخ الاصدار</label>
                            <div className="col-sm-3">
                            <Controller
                                  control={control}
                                  name="issueDate"
                                  render={({ onChange, onBlur, value }) => (
                                    <ReactDatePicker
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      selected={value}
                                      dateFormat="dd/MM/yyyy"
                                      placeholderText="dd/MM/yyyy "   
                                      className="form-control form-control-user"
                                    />
                                  )}
                                />

                            </div>
                            <label  className="col-sm-3 col-form-label">تاريخ الانتهاء</label>
                            <div className="col-sm-3" >
                            <Controller
                                  control={control}
                                  name="expiryDate"
                                  render={({ onChange, onBlur, value }) => (
                                    <ReactDatePicker
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      selected={value}
                                      dateFormat="dd/MM/yyyy"
                                      placeholderText="dd/MM/yyyy "   
                                      className="form-control form-control-user"
                                    />
                                  )}
                                />
                            </div>
                           
                          </div>
                          {/* ################### form- row-005 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">عنوان السكن</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user"  
                              name="address" ref={register} />
                            </div>
                            <label  className="col-sm-3 col-form-label">تاريخ انتهاء الاقامة</label>
                            <div className="col-sm-3">
                            <Controller
                                  control={control}
                                  name="residencyExpiryDate"
                                  render={({ onChange, onBlur, value }) => (
                                    <ReactDatePicker
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      selected={value}
                                      dateFormat="dd/MM/yyyy"
                                      placeholderText="dd/MM/yyyy "   
                                      className="form-control form-control-user"
                                    />
                                  )}
                                />
                            </div>
                          </div>
                          {/* ################### form- row-006 #################*/}
                          {/* ################# submit btn ##################### */}
                          <div className="row justify-content-between">
                             <button type="submit" className="btn btn-primary btn-user shorooq  " style={{fontSize: '22px'}}>
                              السابق
                            </button>
                            <button type="submit" className="btn btn-primary btn-user shorooq  " style={{fontSize: '22px'}}>
                              التالي
                            </button >
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
         </Layout>
       
    )
}

export default PassportInfo;
