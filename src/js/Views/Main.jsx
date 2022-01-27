import React, { useState } from "react";
import "../../styles/index.css";

import GreenLight from "../component/Green/Green.jsx";

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
								<GreenLight id="red" />
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
