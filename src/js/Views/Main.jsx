import React, { useState } from "react";
import "../../styles/index.css";

import Light from "../component/Light/Light.jsx";

const Main = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12" id="semaforo">
						<div className="row">
							<div className="greenlight">
								<Light />
							</div>
						</div>
						<div className="row">
							<div className="yellowlight">
								<Light id="red" />
								{/* No se cambia el color si le indico la id  */}
							</div>
						</div>
						<div className="row">
							<div className="yellowlight">
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
