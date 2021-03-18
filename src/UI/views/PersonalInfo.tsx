import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import {IState} from "../../State/personalInfo";
import {SelectOptions} from "../../types/UIRelated"
import { useSelector } from "react-redux";
import { RootState } from "../../State/rootReducer";
import {assignToSelectType, assignToType} from "../../Services/utils/assignType";


export interface IFormData extends IState {
selectedDept?:SelectOptions,
selectedJobTitle?:SelectOptions
}

// class TempClass implements IState {
//   id: number=0;
//   employeeNumber: number=0;
//   // employeeNameArabic?: string;
//   // employeeNameEnglish?: string;
//   // birthDate?: Date;
//   // mobileNumber?: number;
//   // department?: string;
//   jobTitle?: string | undefined;
//   hireDate?: Date | undefined;
//   applicationNumber?: number | undefined;
//   userId?: number | undefined;
//   createdDate?: Date | undefined;
//   updatedDate?: Date | undefined;


// }
const PersonalInfo = () => {  
  const { register, handleSubmit, watch, errors,control } = useForm<IFormData>();
  const stateData = useSelector<RootState,RootState["personalInfo"]>(state => state.personalInfo);
  //TODO pick values correctly
  const jobTitleOptions: SelectOptions[] =
    [
      { label: "طباع", value: "1" },
      { label: "مبرمج", value: "2" }
    ]

    const deptOptions: SelectOptions[] =
    [
      { label: "نظم المعلومات", value: "1" },
      { label: "الشئون الادارية", value: "2" }
    ]

    const onSubmit = async (data:IFormData) => {
      console.log("data on submit",data);
      console.log("stateData",stateData); 
      let res:TempClass  = new TempClass();
      res.
      // res = assignToType(data,res); 
      // console.log("res on submit",res);
    }
  return (
    <Layout>
      <main className="login-bg">
        <div className="container" style={{ marginBottom: '80px' }}>
          {/* Outer Row */}
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{ border: '1px solid rgb(189, 189, 189)' }}>
                <div className="card-header bg-dark">
                  <div className="text-center">
                    <h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: '28px' }}>معاملة تجديد اقامة - البيانات
                      الشخصية</h1>
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
                              <input type="text" className="form-control form-control-user" 
                              name="employeeNumber" ref={register} />
                            </div>
                          </div>
                          {/* ################### form- row-002 #################*/}
                          <div className="form-group row">
                            <label htmlFor="employeeNameArabic" className="col-sm-3 col-form-label">اسم الموظف-عربي</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" 
                              name="employeeNameArabic"  ref={register}/>
                            </div>
                            <label className="col-sm-3 col-form-label">رقم الهاتف</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" name="mobileNumber" />
                            </div>
                          </div>
                          {/* ################### form- row-003 #################*/}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">اسم الموظف-انجليزي</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" name="employeeNameEnglish" />
                            </div>
                            <label className="col-sm-3 col-form-label">تاريخ الميلاد</label>
                            <div className="col-sm-3">
                              {/* <input type="date" className="form-control form-control-user" /> */}
                              <Controller
                                  control={control}
                                  name="birthDate"
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
                          {/* ################### form- row-004 #################*/}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">الادارة/القسم</label>
                            <div className="col-sm-3">
                            <Controller
                                name="selectedDept"
                                control={control}
                                placeholder=" اختر الادار  "
                                options={deptOptions}
                                as={Select}
                              />

                            </div>
                            <label className="col-sm-3 col-form-label">المسمى الوظيفي</label>
                            <div className="col-sm-3">
                            <Controller
                                name="selectedJobTitle"
                                control={control}
                                placeholder=" اختر المسمى الوظيفي  "
                                options={jobTitleOptions}
                                as={Select}
                              />

                            </div>
                          </div>
                          {/* ################### form- row-005 #################*/}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">تاريخ التعيين</label>
                            <div className="col-sm-3">
                              <Controller
                                  control={control}
                                  name="hireDate"
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
                          <div className="row justify-content-between"> <a href="001.html" className="btn btn-primary btn-user shorooq  " style={{ fontSize: '22px' }}>
                            السابق
                            </a>
                            <button type="submit" className="btn btn-primary btn-user shorooq  " style={{ fontSize: '22px' }}>
                              التالي
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
    </Layout>
  );
}
export default PersonalInfo;