import React, { createContext, useState } from "react";
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
} from "../icons";

const ALL_ICONS = [
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

const INITIAL_STATE = {
	items: [].concat(...ALL_ICONS.map((m) => m)),
	setItems: () => {},
	search: "",
	setSearch: () => {},
	setFilter: (index) => {},
	displayItems: [].concat(...ALL_ICONS.map((m) => m)),
};

export const Context = createContext(INITIAL_STATE);

function ContextProvider({ children }) {
	const [search, setSearch] = useState(INITIAL_STATE.search);
	const [items, setItems] = useState(INITIAL_STATE.items);

	const setFilter = (index) => {
		if (index > 0) {
			setItems(ALL_ICONS[index - 1]);
		} else if (index === 0) {
			setItems([].concat(...ALL_ICONS.map((m) => m)));
		}
	};

	const displayItems = !search
		? items
		: items.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));

	return (
		<Context.Provider
			value={{ displayItems, search, setSearch, setFilter, items, setItems }}
		>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider };
