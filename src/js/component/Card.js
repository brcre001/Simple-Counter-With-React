import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div
			className="card h-50 d-inline-block text-white bg-dark m-2 pt-3 pr-2 pb-2 pl-2 border border-secondary text-center"
			style={{ width: "4rem" }}>
			<h1 className={props.className}>{props.text}</h1>
		</div>
	);
};

Card.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
};
