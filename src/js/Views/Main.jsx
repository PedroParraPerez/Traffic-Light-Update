import React, { useState } from "react";
import "../../styles/index.css";
import "../component/Light.css";

import Light from "../component/Light.jsx";

const Main = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12" id="semaforo">
						<div className="row">
							<div id="top">
								<Light />
							</div>
						</div>
						<div className="row">
							<div id="middle">
								<Light />
							</div>
						</div>
						<div id="bottom">
							<div>
								<Light />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Main;
