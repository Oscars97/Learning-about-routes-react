import React from "react";
import { Link, useHistory } from "react-router-dom";
const AboutUs = () => {
	let history = useHistory();
	return (
		<div>
			<h1>This is the about us page</h1>
			<button
				onClick={() => {
					history.goBack();
				}}>
				Go back
			</button>
		</div>
	);
};

export default AboutUs;
