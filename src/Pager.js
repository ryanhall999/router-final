import React from "react";

export default function Pager({ list, pageNum }) {
	let num = 0;
	if (list.data) {
		num = list.data.count;
		num = Math.ceil(num / 50);
	}
	let pageArray = [];
	for (let i = 0; i < num; i++) {
		pageArray.push(i);
	}
	return pageArray.map(function(page) {
		let hash = `#view=users&idx=${page + 1}`;
		return <a href={hash}>{page + 1}</a>;
	});
}
