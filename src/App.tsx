import React from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./UI/views/Home";
import Login from "./UI/views/Login";
import PersonalInfo from "./UI/views/PersonalInfo";
import PassportInfo from "./UI/views/PassportInfo";
import Register from "./UI/views/Register";
import ProtectedRoute from "./UI/components/ProtectedRoute";
import NotFound from "./UI/views/NotFound";
import Footer from "./UI/components/Footer";
import NewRequest from "./UI/views/NewRequest";
import TestRBwithRHF from "./UI/views/TestRBwithRHF";
import NewApp from "./UI/views/NewApp";


function App() {

	return (
		<Router>

			
					<Switch>
						<ProtectedRoute exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/TestRBwithRHF" component={TestRBwithRHF} />
						<ProtectedRoute exact path="/personalInfo" component={PersonalInfo} />
						<ProtectedRoute exact path="/passportInfo" component={PassportInfo} />
						<ProtectedRoute exact path="/newRequest" component={NewRequest} />
						<ProtectedRoute exact path="/newApp" component={NewApp} />
						<Route exact path="/notfound" component={NotFound} />
						<Redirect to="/notfound" />
					</Switch>
				
				<Footer />

		</Router>
	);
}

export default App;
