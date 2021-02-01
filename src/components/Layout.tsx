import React, { FC, useContext } from 'react'
import SideMenu from "./SideMenu";
import AuthHeader from "./AuthHeader";
import UserContext from "../context/AppContext";


const Layout: FC = ({ children }) => {
    // const user = useContext(UserInfoContext);

    return (
        <div id="layoutSidenav_content">
            <SideMenu />
            {true && <AuthHeader />}
            {children}
        </div>
    )
}

export default Layout;
