import React from "react";

function Section({ activeSection, img, direction, text }) {
	return (
		<div className="section">
			<div className="image-container">
				<div
					className={`image ${activeSection === 0 ? "active" : ""}`}
					// style={{ backgroundImage: "url(image1.jpg)" }}
					style={{ backgroundImage: img }}
				>
					<div className="greyish-layer"></div>
				</div>
				<div className={`text-container container ${direction}`}>
					<div className="scroll-container ">
						<div
							className={`scrolling-text ${
								activeSection === 0 ? "active" : ""
							}`}
						>
							<div className="text-4xl font-bold text-white w-80">{text}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section;
