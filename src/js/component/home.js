import React from "react";
import { SecondsCounter } from "./SecondsCounter.js";
import { Card } from "./Card.js";

import "bootstrap";

//create your first component
export function Home() {
	return (
		<div className="container p-3 bg-dark d-flex justify-content-center">
			<SecondsCounter />
		</div>
	);
}
