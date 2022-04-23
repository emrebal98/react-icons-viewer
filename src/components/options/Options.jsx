import React, { useState, useEffect, useRef } from "react";
import { useWindowDimensions } from "./../../hooks";
import { AiOutlineCopy, AiFillCopy } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import "./options.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

function Options({ selected, show, handleClose }) {
	// This ref is connected to the options
	const optionsRef = useRef();
	// The width of the screen
	const { width } = useWindowDimensions();
	// The state of mobile version of options
	const [mobile, setMobile] = useState(false);

	const [size, setSize] = useState(24);
	const [clicked, setClicked] = useState(false);

	// Triggers when options window open
	useEffect(() => {
		setClicked(false);
		//Control options windows fit on current screen
		let optionsWidth = optionsRef.current.clientWidth;
		if (optionsWidth >= width) setMobile(true);
		else setMobile(false);
	}, [selected, width]);

	// The text of the icon usage on react
	const codeText =
		selected &&
		`import { ${selected.iconName} } from "react-icons/${selected.iconName
			.slice(0, 2)
			.toLowerCase()}";`;

	// Handles copy svg button click
	function handleCopy() {
		setClicked(true);
		navigator.clipboard.writeText(codeText);
		setTimeout(() => {
			setClicked(false);
		}, 1000);
	}

	// Handles download as png button
	function handleDownloadAsPNG(e) {
		const svg = {
			name: selected.iconName,
			code: selected.svgCode,
			width: size,
			height: size,
			downloadFileName: `${selected.iconName}_${size}px.png`,
		};

		const canvas = document.createElement("canvas");
		const base64doc = btoa(unescape(encodeURIComponent(svg.code)));
		const img_to_download = document.createElement("img");
		img_to_download.src = "data:image/svg+xml;base64," + base64doc;
		// console.log(w, h);
		img_to_download.onload = function () {
			// console.log("img loaded");
			canvas.setAttribute("width", svg.width);
			canvas.setAttribute("height", svg.height);
			const context = canvas.getContext("2d");
			context.drawImage(img_to_download, 0, 0, svg.width, svg.height);
			const dataURL = canvas.toDataURL("image/png");
			if (window.navigator.msSaveBlob) {
				window.navigator.msSaveBlob(canvas.msToBlob(), svg.downloadFileName);
				e.preventDefault();
			} else {
				const a = document.createElement("a");
				const my_evt = new MouseEvent("click");
				a.download = svg.downloadFileName;
				a.href = dataURL;
				a.dispatchEvent(my_evt);
			}
			//canvas.parentNode.removeChild(canvas);
		};
	}
	// Handles download as svg button
	function handleDownloadAsSVG() {
		const svg = {
			name: selected.iconName,
			code: selected.svgCode,
			downloadFileName: `${selected.iconName}.svg`,
		};

		const base64doc = btoa(unescape(encodeURIComponent(svg.code)));
		const a = document.createElement("a");
		const e = new MouseEvent("click");
		a.download = svg.downloadFileName;
		a.href = "data:image/svg+xml;base64," + base64doc;
		a.dispatchEvent(e);
	}

	return (
		<div
			className={`options${mobile ? ` mobile` : ``}${show ? ` show` : ``}`}
			ref={optionsRef}
		>
			<button className="options__close" onClick={handleClose}>
				<GiCancel />
			</button>

			<div className="image-container">{selected && selected.icon}</div>
			<div className="image-info">
				<div className="icon-name">{selected && selected.iconName}</div>
				<div className="icon-usage">
					<SyntaxHighlighter
						language="jsx"
						style={nightOwl}
						ref={(el) => (this.SyntaxHighlighter = el)}
					>
						{codeText}
					</SyntaxHighlighter>
					<button onClick={handleCopy}>
						{clicked ? <AiFillCopy /> : <AiOutlineCopy />}
					</button>
				</div>
				<div className="download-settings">
					<span className="slider-value">{`${size}px`}</span>
					<input
						className="slider"
						type="range"
						min={24}
						max={240}
						defaultValue={24}
						step={12}
						onInput={(e) => {
							// Set the selected size of icon for downloading as png
							setSize(e.target.value);
						}}
					/>
				</div>
				<div className="download-buttons">
					<button onClick={handleDownloadAsPNG}>
						<HiDownload />
						PNG
					</button>
					<button onClick={handleDownloadAsSVG}>
						<HiDownload />
						SVG
					</button>
					<IconButton svg={selected && selected.svgCode} />
				</div>
			</div>
		</div>
	);
}

export default Options;

const IconButton = ({ svg }) => {
	const [click, setClick] = useState(false);

	const handleCopySVG = () => {
		setClick(true);
		navigator.clipboard.writeText(svg);
		setTimeout(() => {
			setClick(false);
		}, 1000);
	};

	return (
		<button onClick={handleCopySVG}>
			{click ? <AiFillCopy /> : <AiOutlineCopy />}
			COPY SVG
		</button>
	);
};
