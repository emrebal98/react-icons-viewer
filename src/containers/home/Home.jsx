import React, { useState } from "react";
import {
	AI,
	BS,
	BI,
	DI,
	FI,
	FC,
	FA,
	GI,
	GO,
	GR,
	HI,
	IM,
	IO,
	IO5,
	MD,
	RI,
	SI,
	TI,
	VSC,
	WI,
	CG,
} from "../../icons";
import { Search, Grid, Options } from "../../components";
import "./home.css";

function Home() {
	const all = [
		AI,
		BS,
		BI,
		DI,
		FI,
		FC,
		FA,
		GI,
		GO,
		GR,
		HI,
		IM,
		IO,
		IO5,
		MD,
		RI,
		SI,
		TI,
		VSC,
		WI,
		CG,
	];

	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState();

	const [items, setItems] = useState(all[0]);
	const [searchItems, setSearchItems] = useState(all[0]);

	function handleClose(e) {
		setShow(false);
	}

	const showOptions = (selected) => {
		setShow(true);
		setSelected(selected);
	};

	return (
		<main className="home">
			<Search
				all={all}
				searchItems={{ get: searchItems, set: setSearchItems }}
				setItems={setItems}
			/>
			<Grid showOptions={showOptions} items={items} selected={selected} />
			<Options show={show} selected={selected} handleClose={handleClose} />
		</main>
	);
}

export default Home;
