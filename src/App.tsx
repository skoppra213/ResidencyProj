import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Nav from "./views/Nav";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import PersonalInfo from "./views/PersonalInfo";
import PassportInfo from "./views/PassportInfo";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./views/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewRequest from "./views/NewRequest";
import SideMenu from "./components/SideMenu";
import Layout from "./components/Layout";
import UserContext from "./context/AppContext";
import { userInfo } from "./types/userInfo";


function App() {

	const [user, setUser] = useState(userInfo)


	return (
		<UserContext.Provider value={{user, setUser}}>
			<Router>
				<Header />
				<div id="layoutSidenav">
					<Layout >
						<Switch>

							<ProtectedRoute exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<ProtectedRoute exact path="/personalInfo" component={PersonalInfo} />
							<ProtectedRoute exact path="/passportInfo" component={PassportInfo} />
							<ProtectedRoute exact path="/newrequest" component={NewRequest} />
							<Route exact path="/notfound" component={NotFound} />
							<Redirect to="/notfound" />

						</Switch>
					</Layout>
					<Footer />
				</div>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
