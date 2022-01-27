import React, { useState } from "react";
import "../../styles/index.css";

import RedLight from "../component/Red/Red.jsx";
import GreenLight from "../component/Green/Green.jsx";
import YellowLight from "../component/Yellow/Yellow.jsx";

const Main = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12" id="semaforo">
						<div className="row">
							<div className="greenlight">
								<GreenLight />
							</div>
						</div>
						<div className="row">
							<div className="yellowlight">
								<GreenLight />
							</div>
						</div>
						<div className="row">
							<div className="yellowlight">
								<GreenLight />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Main;
