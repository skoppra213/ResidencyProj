import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import auth from "../auth/auth";
import UserContext from "../context/AppContext";

const ProtectedRoute: React.ComponentType<any> = ({component:Component, ...rest}) => {

	const {user} = useContext(UserContext);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (user.isLoggedIn) {
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
