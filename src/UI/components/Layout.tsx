import React, { FC } from 'react'
import SideMenu from "./SideMenu";
import AuthHeader from "./AuthHeader";
import Header from './Header';
import FullPageLoader from './FullPageLoader';
import { getLocalStorage } from '../../Services/utils/localStorageHelper';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../State/rootReducer";

import { authenticateResponse } from '../../types/userInfo';
import '../../assets/js/all';


const Layout: FC = ({ children }) => {
    const LookUpState = useSelector<RootState,RootState["lookUp"]>(state => state.lookUp);
    const {IsLoading} = LookUpState;


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
            { IsLoading && <FullPageLoader />}
        </>
    )
}

export default Layout;
