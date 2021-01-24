import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";

const PersonalInfo = ()=>{
    return (
        <div id="layoutSidenav_content">
            <SideMenu />
            <main className="login-bg">
        <div className="container" style={{marginBottom: '80px'}}>
          {/* Outer Row */}
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{border: '1px solid rgb(189, 189, 189)'}}>
                <div className="card-header bg-dark">
                  <div className="text-center">
                    <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: '28px'}}>معاملة تجديد اقامة - البيانات
                      الشخصية</h1>
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
                            <label className="col-sm-3 col-form-label">رقم الموظف</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                          </div>
                          {/* ################### form- row-002 #################*/}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">اسم الموظف-عربي</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label  className="col-sm-3 col-form-label">رقم الهاتف</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                          </div>
                          {/* ################### form- row-003 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">اسم الموظف-انجليزي</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label  className="col-sm-3 col-form-label">تاريخ الميلاد</label>
                            <div className="col-sm-3">
                              <input type="date" className="form-control form-control-user" />
                            </div>
                          </div>
                          {/* ################### form- row-004 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">الادارة/القسم</label>
                            <div className="col-sm-3">
                              <select className="form-control form-control-user">
                                <option>اختر الادارة</option>
                                <option value="1">نظم المعلومات</option>
                                <option value="2">الشئون الادارية</option>
                              </select>
                            </div>
                            <label  className="col-sm-3 col-form-label">المسمى الوظيفي</label>
                            <div className="col-sm-3">
                              <select className="form-control form-control-user">
                                <option>اختر المسمى الوظيفي</option>
                                <option value="1">طباع</option>
                                <option value="2">مبرمج</option>
                              </select>
                            </div>
                          </div>
                          {/* ################### form- row-005 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">تاريخ التعيين</label>
                            <div className="col-sm-3">
                              <input type="date" className="form-control form-control-user" />
                            </div>
                          </div>
                          {/* ################### form- row-006 #################*/}
                          {/* ################# submit btn ##################### */}
                          <div className="row justify-content-between"> <a href="001.html" className="btn btn-primary btn-user shorooq  " style={{fontSize: '22px'}}>
                              السابق
                            </a>
                            <a href="001-002.html" className="btn btn-primary btn-user shorooq  " style={{fontSize: '22px'}}>
                              التالي
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
        </div>
    );
}
export default PersonalInfo;