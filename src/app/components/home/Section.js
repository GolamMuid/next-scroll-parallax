import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Section({ activeSection, img, direction, text }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		// <div className="section">
		// 	<div className="image-container">
		// 		<div
		// 			className={`image ${activeSection === 0 ? "active" : ""}`}
		// 			// style={{ backgroundImage: "url(image1.jpg)" }}
		// 			style={{ backgroundImage: img }}
		// 		>
		// 			<div className="greyish-layer"></div>
		// 		</div>
		// 		<div className={`text-container container ${direction}`}>
		// 			<div className="scroll-container ">
		// 				<div
		// 					className={`scrolling-text ${
		// 						activeSection === 0 ? "active" : ""
		// 					}`}
		// 				>
		// 					<div className="text-4xl font-bold text-white w-80">{text}</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<div className="section ">
			<div className="image-container  relative">
				<div
					className={`image ${activeSection === 0 ? "active" : ""}`}
					// style={{ backgroundImage: "url(image1.jpg)" }}
					style={{ backgroundImage: img }}
				>
					<div className="greyish-layer"></div>
				</div>

				<div
					className={`text-container container ${direction}  h-full flex items-end absolute top-56`}
				>
					<div className="scroll-container ">
						<div
							className={`scrolling-text ${
								activeSection === 0 ? "active" : ""
							}`}
						>
							<div
								data-aos="fade-left"
								data-aos-delay="700" //Here you can use any of the AOS animations
							>
								<div className="text-4xl font-bold text-white w-80 ">
									{text}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section;
