import React, { useEffect } from "react";
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


function App() {


	return (
		<Router>
				<Header />
			<div id="layoutSidenav">
			
				<Switch>
					<ProtectedRoute exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/personalInfo" component={PersonalInfo} />
					<Route exact path="/passportInfo" component={PassportInfo} />
					<Route exact path="/notfound" component={NotFound} />
					<Redirect to="/notfound" />
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
