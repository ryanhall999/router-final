import React, { useEffect, useState } from "react";
import "./App.css";
import qs from "qs";
import Users from "./components/Users";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { getHash } from "./utils/utils";
import axios from "axios";

let API = "https://acme-users-api-rev.herokuapp.com/api";
let pageNum = 0;

const fetchUsers = async pageNum => {
	let users = await (await axios.get(`${API}/users/${pageNum}`)).data.users;
	return users;
};

const fetchFullList = async () => {
	let list = await await axios.get(`${API}/users/`);
	return list;
};
function App() {
	const [params, setParams] = useState(qs.parse(getHash()));
	const [users, setUsers] = useState([]);
	const [list, setList] = useState({});

	useEffect(() => {
		window.addEventListener("hashchange", () => {
			setParams(qs.parse(getHash()));
		});
		setParams(qs.parse(getHash()));
	}, []);

	useEffect(() => {
		fetchUsers(params.idx).then(data => setUsers(data));
	}, [params]);

	useEffect(() => {
		fetchFullList().then(data => setList(data));
	}, []);

	console.log(users, list, pageNum);

	return (
		<div>
			<Nav />
			{params.view === undefined && <Home />}
			{params.view === "users" && (
				<Users users={users} list={list} pageNum={pageNum} />
			)}
		</div>
	);
}

export default App;
