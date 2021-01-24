import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
			<NavLink exact to="/" className="navbar-brand">
				MyAppBrand
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink exact to="/" activeClassName="active" className="nav-link">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/shop"
							activeClassName="active"
							className="nav-link">
							Shop
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/about"
							activeClassName="active"
							className="nav-link">
							About
						</NavLink>
					</li>
				</ul>
				<NavLink
					exact
					to="/login"
					activeClassName="active"
					className="nav-link">
					Login
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
