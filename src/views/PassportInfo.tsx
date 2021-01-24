import React,{useState} from 'react'
import SideMenu from "../components/SideMenu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const PassportInfo = () => {
  const [expiaryDate, setExpiaryDate] = useState<Date|null>();
  const [releaseDate,setReleaseDate] = useState<Date|null>();
  const [resExpiaryDate, setResExpiaryDate] = useState<Date|null>();

  
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
                    <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: '28px'}}>معاملة تجديد اقامة - بيانات
                      الجواز والاقامة</h1>
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
                              <select className="form-control form-control-user">
                                <option>اختر الجنسية</option>
                                <option value="1">مصري</option>
                                <option value="2">هندي</option>
                              </select>
                            </div>
                          </div>
                          {/* ################### form- row-003 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">رقم الجواز</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label  className="col-sm-3 col-form-label">مكان الاصدار</label>
                            <div className="col-sm-3">
                              <select className="form-control form-control-user">
                                <option>اختر الدولة</option>
                                <option value="1">الكويت</option>
                                <option value="2">مصر</option>
                                <option value="3">الهند</option>
                              </select>
                            </div>
                          </div>
                          {/* ################### form- row-004 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">تاريخ الاصدار</label>
                            <div className="col-sm-3">
                            <DatePicker className="form-control " 
                            selected={releaseDate} 
                            onChange={(date:Date)  => setReleaseDate(date)} 
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/MM/yyyy "                            
                              />
                            </div>
                            <label  className="col-sm-3 col-form-label">تاريخ الانتهاء</label>
                            <div className="col-sm-3" >
                            <DatePicker className="form-control " 
                            selected={expiaryDate} 
                            onChange={(date:Date)  => setExpiaryDate(date)} 
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/MM/yyyy "                            
                              />
                            </div>
                           
                          </div>
                          {/* ################### form- row-005 #################*/}
                          <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">عنوان السكن</label>
                            <div className="col-sm-3">
                              <input type="text" className="form-control form-control-user" />
                            </div>
                            <label  className="col-sm-3 col-form-label">تاريخ انتهاء الاقامة</label>
                            <div className="col-sm-3">
                            <DatePicker className="form-control " 
                            selected={resExpiaryDate} 
                            onChange={(date:Date)  => setResExpiaryDate(date)} 
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/MM/yyyy "                            
                              />
                            </div>
                          </div>
                          {/* ################### form- row-006 #################*/}
                          {/* ################# submit btn ##################### */}
                          <div className="row justify-content-between"> <a href="001-001.html" className="btn btn-primary btn-user shorooq  " style={{fontSize: '22px'}}>
                              السابق
                            </a>
                            <a href="001-003.html" className="btn btn-primary btn-user shorooq  " style={{fontSize: '22px'}}>
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
    )
}

export default PassportInfo;
