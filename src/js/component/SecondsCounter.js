import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	// Create a place holder with max number of digits in counter
	let placeholder = "000000";

	// Converting the passed property of seconds from number to string
	let seconds = props.seconds.toString();

	// Importing the font-awesome icon into a variable
	let icon = <i className="far fa-clock"></i>;

	let output = (
		placeholder
			.split("")
			.slice(seconds.length)
			.join("") + seconds
	).split("");

	// Creates each div for
	let result = output.map((element, index) => {
		return (
			<div className="box" key={index}>
				{element}
			</div>
		);
	});

	return <div className="container">{result}</div>;
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
