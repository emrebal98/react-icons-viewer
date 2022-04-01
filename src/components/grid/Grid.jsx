import React /*, { useState, useEffect }*/ from "react";
import { Icon } from "../";
// import InfiniteScroll from "react-infinite-scroll-component";
import "./grid.css";

function Grid({ items, showOptions, setItems, searching }) {
	// const [count, setCount] = useState({
	// 	prev: 0,
	// 	next: 500,
	// });
	// const [hasMore, setHasMore] = useState(true);
	// const [current, setCurrent] = useState(items.slice(count.prev, count.next));
	// const getMoreData = () => {
	// 	if (current.length === items.length) {
	// 		setHasMore(false);
	// 		return;
	// 	}
	// 	setTimeout(() => {
	// 		setCurrent(current.concat(items.slice(count.prev + 10, count.next + 10)));
	// 	}, 100);
	// 	setCount((prevState) => ({
	// 		prev: prevState.prev + 10,
	// 		next: prevState.next + 10,
	// 	}));
	// };

	// useEffect(() => {
	// 	if (searching) setCurrent(items);
	// 	else setCurrent(items.slice(count.prev, count.next));

	// 	console.log("asd");
	// }, [searching]);

	// return !searching ? (
	// 	<InfiniteScroll
	// 		dataLength={current.length}
	// 		next={getMoreData}
	// 		hasMore={hasMore}
	// 		loader={<h4>Loading...</h4>}
	// 	>
	// 		<div className="icon__grid">
	// 			{current.map((e, index) => (
	// 				<Icon key={index} showOptions={showOptions} size={32} name={e.name}>
	// 					{e.call()}
	// 				</Icon>
	// 			))}
	// 		</div>
	// 	</InfiniteScroll>
	// ) : (
	// 	<div className="icon__grid">
	// 		{items.map((e, index) => (
	// 			<Icon key={index} showOptions={showOptions} size={32} name={e.name}>
	// 				{e.call()}
	// 			</Icon>
	// 		))}
	// 	</div>
	// );

	return (
		<div className="icon__grid">
			{items.map((e, index) => (
				<Icon key={index} showOptions={showOptions} size={32} name={e.name}>
					{e.call()}
				</Icon>
			))}
		</div>
	);
}

export default Grid;
