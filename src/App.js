import React, { useEffect, useState } from "react";
import "./App.css";
import qs from "qs";
import Users from "./components/Users";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { getHash } from "./utils/utils";

function App() {
	const [params, setParams] = useState(qs.parse(getHash()));

	useEffect(() => {
		window.addEventListener("hashchange", () => {
			setParams(qs.parse(getHash()));
		});
		setParams(qs.parse(getHash()));
	}, []);

	return (
		<div>
			<Nav />
			{params.view === undefined && <Home />}
			{params.view === "users" && <Users />}
		</div>
	);
}

export default App;
