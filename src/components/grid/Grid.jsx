import React, { useContext } from "react";
import { Context } from "../../context/";
import { Icon } from "../";
import { List, AutoSizer } from "react-virtualized";
import "./grid.css";

function Grid({ showOptions, selected }) {
	const { displayItems } = useContext(Context);

	function rowRenderer({ index, key, style }, itemsPerRow) {
		const rows = [];
		const fromIndex = index * itemsPerRow;
		const toIndex = Math.min(fromIndex + itemsPerRow, displayItems.length);

		//List of items on per row
		for (let i = fromIndex; i < toIndex; i++) {
			rows.push(
				<Icon
					key={i}
					showOptions={showOptions}
					size={32}
					icon={displayItems[i]}
					selected={selected}
				/>
			);
		}

		return (
			<div className="icon__grid_row" key={key} style={style}>
				{rows}
			</div>
		);
	}

	const ITEM_SIZE = 120; // row

	return (
		<div className="icon__grid">
			{displayItems && (
				<AutoSizer>
					{({ height, width }) => {
						const itemsPerRow = Math.floor(width / ITEM_SIZE);
						const rowCount = Math.ceil(displayItems.length / itemsPerRow);

						return (
							<List
								width={width}
								height={height}
								rowCount={rowCount}
								rowHeight={ITEM_SIZE}
								rowRenderer={(param) => {
									return rowRenderer(param, itemsPerRow);
								}}
							/>
						);
					}}
				</AutoSizer>
			)}
		</div>
	);
}

export default Grid;
