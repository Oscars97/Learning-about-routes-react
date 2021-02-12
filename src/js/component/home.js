import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs.jsx";
import Navbar from "./Navbar.jsx";
import Contact from "./Contact.jsx";
//create your first component
const Index = () => <h1>This is the Index</h1>;

export function Home() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Index} />
				<Route path="/about" component={AboutUs} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</BrowserRouter>
	);
}
