import React, { useState } from "react";
import "../component/Light.css";

const Light = () => {
	const [Light, setLight] = useState({
		top: "",
		middle: "",
		button: "",
	});

	return (
		<>
			<div
				className={`fondo ${Light.top}`}
				onClick={() => {
					setLight({
						top: "LightGlowTop",
						middle: "",
						grebuttonen: "",
					});
				}}></div>
		</>
	);
};

export default Light;
