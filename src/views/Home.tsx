import React from "react";
import auth from "../auth/auth";

const Home = (props: any) => {
	return (
		<>
			<h1>Home Page</h1>
			<button
				className="btn btn-danger"
				onClick={() => {
					auth.logout(() => {
						props.history.push("/login");
					});
				}}>
				Logout
			</button>
		</>
	);
};

export default Home;
