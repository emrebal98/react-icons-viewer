import "./App.css";
import React from "react";
import Home from "./containers/home/Home";
import { ContextProvider } from "./context/";

function App() {
	return (
		<ContextProvider>
			<Home />
		</ContextProvider>
	);
}

export default App;
