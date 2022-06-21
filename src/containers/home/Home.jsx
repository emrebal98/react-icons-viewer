import React, { useState } from "react";
import { Search, Grid, Options } from "../../components";
import { AiFillGithub } from "react-icons/ai";
import "./home.css";

function Home() {
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState();

	function handleClose(e) {
		setShow(false);
	}

	const showOptions = (selected) => {
		setShow(true);
		setSelected(selected);
	};

	return (
		<main className="home">
			<Search />
			<a
				className="github-icon"
				href="https://github.com/emrebal98/react-icons-viewer"
				target="_blank"
				rel="noopener noreferrer"
			>
				Give it a star
				<AiFillGithub />
			</a>

			<Grid showOptions={showOptions} selected={selected} />
			<Options show={show} selected={selected} handleClose={handleClose} />
		</main>
	);
}

export default Home;
