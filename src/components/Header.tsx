import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../context/AppContext";


const Header = () => {

  const {user,setUser} = useContext(UserContext);
  console.log("Header ~ user", user);

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <img className="navbar-brand d-none d-md-block" src={process.env.PUBLIC_URL + 'img/brand.png'} alt="" />

        <p className="navbar-brand d-block d-sm-none">وزارة الاوقاف والشئون اﻹسلامية</p>
        <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle"
        > <i className="fas fa-bars" />
        </button>
        {/* profle*/}
        {/*#######################################*/}
        <div className="d-none d-md-inline-block">
          <ul className="navbar-nav ml-auto ml-md-0">
            {user.isLoggedIn ?
              <li className="nav-item dropdown"> <a className="top-nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" />&nbsp;&nbsp; ملف المستخدم
              &nbsp;&nbsp;</a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown"> <a className="dropdown-item sb-nav-link-icon" href="#">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp; الملف الشخصي
              </a>
                  <a className="dropdown-item sb-nav-link-icon" href="#">
                    <i className="fas fa-angle-double-left" />&nbsp;&nbsp; تسجيل الخروج
              </a>
                  <div className="dropdown-divider " />
                </div>
              </li> : <li className="nav-item"><Link to="/login" className="top-nav-link">تسجيل الدخول</Link></li>}
          </ul>
        </div>
        <div className="d-none d-md-inline-block" />
        {/*#######################################*/}
      </nav>

    </>
  );
}

export default Header;
