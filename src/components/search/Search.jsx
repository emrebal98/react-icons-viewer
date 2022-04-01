import React, { useState /*, useEffect */ } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Filter } from "../";
import "./search.css";

function Search({ searchItems, setSearchItems, setItems, all, setSearching }) {
	const [search, setSearch] = useState();
	const [focus, setFocus] = useState(false);

	// useEffect(() => {
	// 	if (search?.length < 3 || !search) setSearching(false);
	// 	else setSearching(true);
	// }, [search]);

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
		// if (search.length > 2) {
		const result = searchItems.filter((v) =>
			v.name.toLowerCase().includes(search.toLowerCase())
		);
		setItems(result);

		// }
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
			<Filter all={all} setItems={setItems} setSearchItems={setSearchItems} />
		</div>
	);
}

export default Search;
