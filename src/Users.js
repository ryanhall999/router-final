import React from "react";
import Pager from "./Pager";

export default function Users({ users, list, pageNum }) {
	return (
		<div>
			<div className="links">
				<Pager list={list} pageNum={pageNum} />
			</div>
			<div>
				Users
				<ul>
					{users.map(user => {
						return <li key={user.id}>{user.fullName}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}
