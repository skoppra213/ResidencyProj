import React from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import PersonalInfo from "./views/PersonalInfo";
import PassportInfo from "./views/PassportInfo";
import Register from "./views/Register";
import Register2 from "./views/Register2";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import NewRequest from "./views/NewRequest";
import HookForm from "./views/HookForm";


function App() {

	return (
		<Router>

			
					<Switch>
						<ProtectedRoute exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/register2" component={Register2} />
						<Route exact path="/hookForm" component={HookForm} />
						<ProtectedRoute exact path="/personalInfo" component={PersonalInfo} />
						<ProtectedRoute exact path="/passportInfo" component={PassportInfo} />
						<ProtectedRoute exact path="/newRequest" component={NewRequest} />
						<Route exact path="/notfound" component={NotFound} />
						<Redirect to="/notfound" />
					</Switch>
				
				<Footer />

		</Router>
	);
}

export default App;
