import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import auth from "../auth/auth";

const ProtectedRoute: React.ComponentType<any> = ({component:Component, ...rest}) => {

	return (
		<Route
			{...rest}
			render={(props) => {
				console.log("render props", props);

				if (auth.isAuthenticated()) {
					console.log(" auth.isAuthenticated()", auth.isAuthenticated());
					return <Component {...props} />;
				} else {
					return (<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>);
				}
			}}
		/>
	);
};

export default ProtectedRoute;
