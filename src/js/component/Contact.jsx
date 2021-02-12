import React from "react";
import { useHistory } from "react-router-dom";
const Contact = () => {
	let history = useHistory();
	return (
		<div>
			<ul>
				<li>Something here</li>
				<li>Something here</li>
				<li>Something here</li>
				<li>Something here</li>
			</ul>
			<button
				onClick={() => {
					history.goBack();
				}}>
				Go back
			</button>
		</div>
	);
};

export default Contact;
