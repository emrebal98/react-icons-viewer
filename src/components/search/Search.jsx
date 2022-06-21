import React, { useState, useContext } from "react";
import { Context } from "../../context/";
import { AiOutlineSearch } from "react-icons/ai";
import { Filter } from "../";
import "./search.css";

function Search() {
	const { search, setSearch } = useContext(Context);
	const [focus, setFocus] = useState(false);

	function handleFocus(e) {
		setFocus(true);
	}

	function handleOutFocus(e) {
		setFocus(false);
	}

	function handleChange(e) {
		setSearch(e.target.value);
	}

	return (
		<div className={focus ? "search__field focus" : "search__field"}>
			<div className="searh__field__icon">
				<AiOutlineSearch />
			</div>
			<input
				onFocus={handleFocus}
				onBlur={handleOutFocus}
				type="text"
				name="text"
				placeholder="Search..."
				value={search}
				onChange={handleChange}
			/>
			<Filter />
		</div>
	);
}

export default Search;
