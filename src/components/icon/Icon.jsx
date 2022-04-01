import React from "react";
import { IconContext } from "react-icons";
import "./icon.css";

function Icon({ children, size = 32, showOptions, name }) {
	const ref = React.useRef();
	const onClick = React.useCallback(() => {
		if (ref.current === undefined) {
			return;
		}

		let svg = ref.current.children[0].cloneNode(true);
		// svg.setAttribute("height", `${size}px`);
		// svg.setAttribute("width", `${size}px`);
		// navigator.clipboard.writeText(svg.outerHTML);
		// setOpen(true);
		// console.log(name);
		// console.log(children);
		showOptions({ icon: children, iconName: name, svgCode: svg.outerHTML });
	}, []);

	return (
		<IconContext.Provider value={{ className: "icon__inline", size: `${size}px` }}>
			<div className="icon-container" onClick={onClick} ref={ref}>
				{children}
				<span className="icon__title">{name}</span>
			</div>
		</IconContext.Provider>
	);
}

export default Icon;
