import React, { FC } from 'react'
import SideMenu from "./SideMenu";
import AuthHeader from "./AuthHeader";
import Header from './Header';
import { getLocalStorage } from '../../Services/utils/localStorageHelper';

import { authenticateResponse } from '../../types/userInfo';
import '../../assets/js/all';


const Layout: FC = ({ children }) => {

    const userAuth = getLocalStorage("user", authenticateResponse);

    return (
        <>
         <Header />
            <div id="layoutSidenav">
                <SideMenu />
                <div id="layoutSidenav_content">
       
          
                    {userAuth.isLoggedIn && 
                    <AuthHeader loggedIn={userAuth.isLoggedIn} 
                    fullName={ userAuth.response.userInfo.employeeName}
                    civilId = {userAuth.response.userInfo.civilId} />}
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;
