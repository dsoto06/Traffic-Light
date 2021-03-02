import React from "react";

//create your first component
export function TrafficLight() {
	return (
		<div>
			<div className="line"></div>
			<div className="box">
				<div className="red"></div>
				<div className="yellow"></div>
				<div className="green"></div>
			</div>
		</div>
	);
}
