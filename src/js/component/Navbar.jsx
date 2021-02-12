import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="navegation-bar">
			<ul className="nav flex-column">
				<Link to="./">
					<li className="nav-item">Home</li>
				</Link>
				<Link to="./about">
					<li className="nav-item">About</li>
				</Link>
				<Link to="./contact">
					<li className="nav-item">Contact Us</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
