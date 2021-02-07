import React,{useState} from 'react'
import Layout from "../components/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';



const Register = () => {
    return (
      <Layout>
        <main className="login-bg">
        <div className="container" style={{marginBottom: '80px'}}>
          {/* Outer Row */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{border: '1px solid rgb(189, 189, 189)'}}>
                <div className="card-header bg-dark">
                  <div className="text-center">
                    <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: '28px'}}>تسجيل مستخدم جديد</h1>
                  </div>
                </div>
                <div className="card-body p-0 ">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <form className="user">
                          {/* ################### form- row-001 #################*/}
                          <div className="form-group row">
                            <label htmlFor="" className="col-sm-2 col-form-label">الرقم المدني</label>
                            <div className="col-sm-4">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label htmlFor="" className="col-sm-2 col-form-label">الرقم المسلسل</label>
                            <div className="col-sm-4">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                          </div>
                          {/* ################### form- row-002 #################*/}
                          <div className="form-group row">
                            <label htmlFor="" className="col-sm-2 col-form-label">رقم الموظف</label>
                            <div className="col-sm-4">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label htmlFor="" className="col-sm-2 col-form-label">اسم الموظف</label>
                            <div className="col-sm-4">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                          </div>
                          {/* ################### form- row-003 #################*/}
                          <div className="form-group row">
                            <label htmlFor="" className="col-sm-2 col-form-label">رقم الهاتف</label>
                            <div className="col-sm-4">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label htmlFor="" className="col-sm-2 col-form-label">البريد الالكتروني</label>
                            <div className="col-sm-4">
                              <input type="email" className="form-control form-control-user" />
                            </div>
                          </div>
                          {/* ################### form- row-004 #################*/}
                          <div className="form-group row">
                            <label htmlFor="" className="col-sm-2 col-form-label">الادارة / القسم</label>
                            <div className="col-sm-4">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label htmlFor="" className="col-sm-2 col-form-label">الجنسية</label>
                            <div className="col-sm-4">
                              <select className="form-control form-control-user">
                                <option>اختر الجنسية</option>
                                <option value="1">مصري</option>
                                <option value="2">هندي</option>
                              </select>
                            </div>
                          </div>
                          {/* ################### form- row-005 #################*/}
                          <div className="form-group row">
                            <label htmlFor="" className="col-sm-2 col-form-label">الفئة التابعة لها</label>
                            <div className="col-sm-4">
                              <select className="form-control form-control-user">
                                <option>اختر الفئة</option>
                                <option value="">موظف</option>
                                <option value="">مكلف</option>
                                <option value="">بند مشاريع</option>
                                <option value="">الوقف الجعفري</option>
                                <option value="">مساجد حدودية</option>
                                <option value="">أخرى</option>
                              </select>
                            </div>
                            <label htmlFor="" className="col-sm-2 col-form-label">إقامة وزارة</label>
                            <div className="col-sm-4">
                              <div className="custom-control custom-checkbox  mt-1">
                                <input type="checkbox" defaultChecked data-toggle="toggle" data-on="<i class='fa fa-check'></i>" data-off="<i class='fas fa-times'></i>" data-size="sm" />
                              </div>
                            </div>
                          </div>
                          {/* ################### form- row-006 #################*/}
                          <div className="form-group row">
                            <label htmlFor="" className="col-sm-2 col-form-label">كلمة المرور</label>
                            <div className="col-sm-4">
                              <input type="password" className="form-control form-control-user" />
                            </div>
                            <label htmlFor="" className="col-sm-2 col-form-label">تأكيد كلمة المرور</label>
                            <div className="col-sm-4">
                              <input type="password" className="form-control form-control-user" />
                            </div>
                          </div>
                          <hr />
                          {/* ################# submit btn ##################### */}
                          <div className="row justify-content-center"> <a href="#" className="btn btn-primary btn-user shorooq registeralert " style={{fontSize: '22px'}}>
                              تسجيل مستخدم جديد
                            </a>
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

export default Register
