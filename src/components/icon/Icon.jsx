import React from "react";
import { IconContext } from "react-icons";
import "./icon.css";

function Icon({ size = 32, showOptions, icon, selected }) {
	const ref = React.useRef();
	const onClick = React.useCallback(() => {
		if (ref.current === undefined) {
			return;
		}
		//Get the svg of the selected icon
		let svg = ref.current.children[0].cloneNode(true);
		// Show options window
		showOptions({
			icon: icon?.icon.call(),
			iconName: icon?.name,
			svgCode: svg.outerHTML,
			library: icon?.library,
		});
	}, [icon?.icon, icon?.library, icon?.name, showOptions]);

	return (
		<IconContext.Provider value={{ className: "icon__inline", size: `${size}px` }}>
			<div
				className={`icon-container${
					selected?.iconName === icon?.name ? ` active` : ``
				}`}
				onClick={onClick}
				ref={ref}
			>
				{icon?.icon.call()}
				<span className="icon__title">{icon?.name}</span>
			</div>
		</IconContext.Provider>
	);
}

export default Icon;
