import React, { useEffect, useState } from "react";
import "./App.css";
import qs from "qs";

function App() {
	const getHash = () => {
		return window.location.hash.slice(1);
	};

	const [params, setParams] = useState(qs.parse(getHash()));

	useEffect(() => {
		window.addEventListener("hashchange", () => {
			setParams(qs.parse(getHash()));
		});
		setParams(qs.parse(getHash()));
	}, []);
	return <div></div>;
}

export default App;
