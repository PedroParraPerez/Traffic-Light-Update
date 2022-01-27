import React, { useState } from "react";
import "../Light/Light.css";

const Light = (props) => {
	const [color3, setColor] = useState(`lightglow`);

	return (
		<>
			<div className="BGLight">{props.div}</div>
		</>
	);
};

export default Light;
