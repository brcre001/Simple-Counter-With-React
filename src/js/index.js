//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter.js";

//render your react application using set interval

// Initializing the counter
let counter = 1;

const interval = setInterval(() => {
	// This conditional will stop the loop
	// by using the clearInterval
	if (counter == 30) {
		clearInterval(interval);
	}

	// ReactDOM will render the page as the counter increases in value
	// and is passed to the seconds property in the component
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
