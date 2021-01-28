import React,{FC} from 'react'
import SideMenu from "./SideMenu";
import AuthHeader from "./AuthHeader";


const Layout: FC = ({ children }) => {
    return (
        <div id="layoutSidenav_content">
             <SideMenu />
            <AuthHeader />
           
            {children}
        </div>
    )
}

export default Layout;
