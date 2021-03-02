import React, { useState } from "react";

//create your first component
export const TrafficLight = () => {
	let [red, setRed] = useState("red");
	let [yellow, setYellow] = useState("yellow");
	let [green, setGreen] = useState("green");

	let colorRed = () => {
		if (red == "red") {
			setRed("red color");
		}
		setYellow("yellow");
		setGreen("green");
	};

	let colorYellow = () => {
		if (yellow == "yellow") {
			setYellow("yellow color");
		}
		setRed("red");
		setGreen("green");
	};

	let colorGreen = () => {
		if (green == "green") {
			setGreen("green color");
		}
		setYellow("yellow");
		setRed("red");
	};
	return (
		<div>
			<div className="line"></div>
			<div className="box">
				<div className="red" onClick={colorRed}>
					{red}
				</div>
				<div className="yellow" onClick={colorYellow}>
					{yellow}
				</div>
				<div className="green" onClick={colorGreen}>
					{green}
				</div>
			</div>
		</div>
	);
};
