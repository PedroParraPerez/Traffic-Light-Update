import React, { useState } from "react";
import "../../styles/index.css";

const Main = () => {
	const [on, setOn] = useState({
		top: false,
		middle: false,
		botton: false,
	});
	return (
		<>
			<div className="traffic-ligth">
				<div
					className={`ligth ${on.top === true ? "glow" : ""}`}
					onClick={() => {
						setOn({
							top: true,
							middle: false,
							botton: false,
						});
					}}></div>
				<div
					onClick={() => {
						setOn({
							top: false,
							middle: true,
							botton: false,
						});
					}}
					className={`ligth ${
						on.middle === true ? "glow" : ""
					}`}></div>
				<div
					onClick={() => {
						setOn({
							top: false,
							middle: false,
							botton: true,
						});
					}}
					className={`ligth ${
						on.botton === true ? "glow" : ""
					}`}></div>
			</div>
		</>
	);
};
export default Main;
