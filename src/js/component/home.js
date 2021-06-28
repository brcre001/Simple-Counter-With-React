import React from "react";
import { SecondsCounter } from "./SecondsCounter.js";
import { Card } from "./Card.js";

import "bootstrap";

export function Home() {
	return (
		<div className="container p-3 bg-dark d-flex justify-content-center text-center">
			<Card className="far fa-clock" />
			<Card text="0" />
			<Card text="0" />
			<Card text="0" />
			<Card text="0" />
			<Card text="0" />
			<Card text="0" />
		</div>
	);
}
