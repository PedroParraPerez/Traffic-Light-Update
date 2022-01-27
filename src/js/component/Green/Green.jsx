import React, { useState } from "react";
import "../Green/Green.css";

const GreenLight = (props) => {
	const [color3, setColor] = useState(`green`);

	return (
		<>
			<div className="green" id="color"></div>
		</>
	);
};

export default GreenLight;
