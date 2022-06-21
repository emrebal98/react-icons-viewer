import React, { useState, useContext } from "react";
import { Context } from "../../context/";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import "./filter.css";

function Filter() {
	const list = [
		"All Categories",
		"Ant Design Icons",
		"Bootstrap Icons",
		"BoxIcons",
		"Devicons",
		"Feather",
		"Flat Color Icons",
		"Font Awesome",
		"Game Icons",
		"Github Octicons icons",
		"Grommet-Icons",
		"Heroicons",
		"IcoMoon Free",
		"Ionicons 4",
		"Ionicons 5",
		"Material Design icons",
		"Remix Icon",
		"Simple Icons",
		"Typicons",
		"VS Code Icons",
		"Weather Icons",
		"css.gg",
	];

	const { setFilter } = useContext(Context);
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState(list[0]);

	function handleShowFilter(e) {
		setShow(!show);
	}

	function handleSelect(value) {
		setSelected(value);

		let index = list.indexOf(value);
		setFilter(index);
	}

	return (
		<div className="select__box" onClick={handleShowFilter}>
			<p>
				{selected}
				{!show ? (
					<BiChevronDown className="select__box__icon" />
				) : (
					<BiChevronUp className="select__box__icon" />
				)}
			</p>

			<div className={show ? "select__box__list show" : "select__box__list"}>
				<ul>
					{list.map((f, index) => (
						<li key={index} onClick={(e) => handleSelect(f)}>
							{f}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Filter;
