import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Filter } from "../";
import "./search.css";

function Search({ searchItems, setItems, all }) {
	const [search, setSearch] = useState();
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

	function handleSearch(e) {
		const result = searchItems.get.filter((v) =>
			v.name.toLowerCase().includes(search.toLowerCase())
		);
		setItems(result);
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
				onKeyUp={handleSearch}
			/>
			<Filter all={all} setItems={setItems} searchItems={searchItems} />
		</div>
	);
}

export default Search;
