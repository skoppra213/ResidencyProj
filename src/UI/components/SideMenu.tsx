import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const SideMenu = () => {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            {/*#######################################*/}
            <div className="nav">
              {/*############### Section title ########################*/}
              <div className="sb-sidenav-menu-heading-title text-center">نظام تجديد اﻹقامات-وزارة الاوقاف</div>
              {/*######################################################*/}
              {/*#######################################*/} <a className="nav-link" href="#">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-house-user" />&nbsp;&nbsp;
                </span>
                <span>الصفحة الرئيسية</span>
              </a>
          
              <NavLink activeClassName="active" className="nav-link" to="/newApp">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>معاملة جديدة</span>
              </NavLink>
              <NavLink activeClassName="active" className="nav-link" to="/personalInfo">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>البيانات الشخصية</span>
              </NavLink>
              <NavLink  activeClassName="active" className="nav-link" to="/passportInfo">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>بيانات الجواز والاقامة</span>
              </NavLink>
              <a className="nav-link" href="001-003.html">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>المرفقات</span>
              </a>
              <a className="nav-link" href="001-004.html">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>إقرار السداد</span>
              </a>
              {/* ################## collapse link for group links #############
                            */} <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-user" />&nbsp;&nbsp;
                </div>قائمة روابط منسدلة &nbsp;&nbsp;
                <div className="sb-sidenav-collapse-arrow">
                  &nbsp;<i className="fas fa-angle-double-down" />&nbsp;&nbsp;
                </div>
              </a>
              <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested"> <a className="nav-link" href="index.html">
                  <span className="sb-nav-link-icon">
                    <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                    </span>
                  <span>رابط رقم واحد</span>
                </a>
                </nav>
                <nav className="sb-sidenav-menu-nested"> <a className="nav-link" href="index.html">
                  <span className="sb-nav-link-icon">
                    <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                    </span>
                  <span>رابط رقم اثنين</span>
                </a>
                </nav>
                <nav className="sb-sidenav-menu-nested"> <a className="nav-link" href="index.html">
                  <span className="sb-nav-link-icon">
                    <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                    </span>
                  <span>رابط رقم ثلاث</span>
                </a>
                </nav>
              </div>
              {/* ################## End collapse ############################## */}
              {/*#######################################*/}
            </div>
            {/*#######################################*/}
          </div>
          <div className="sb-sidenav-footer text-center">
            <img   src={process.env.PUBLIC_URL + 'img/itc-text-logo-white.png'}  alt="" />
           
          </div>
        </nav>
      </div>


    </>
  );
}

export default SideMenu;
