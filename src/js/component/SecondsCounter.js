import React from "react";
import { Card } from "./Card.js";

export const SecondsCounter = props => {
	return (
		<>
			<Card className="far fa-clock" />
			<Card text="0" />
			<Card text="0" />
			<Card text="0" />
			<Card text="0" />
			<Card text="0" />
			<Card text="0" />
		</>
	);
};
