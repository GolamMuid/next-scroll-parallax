"use client";

import React, { useEffect, useState } from "react";

function ImageContainer() {
	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		function changeImage() {
			const scroll = window.scrollY + window.innerHeight / 3;
			const sections = document.getElementsByClassName("section");

			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				section.classList.remove("active");

				if (
					section.offsetTop <= scroll &&
					section.offsetTop + section.offsetHeight > scroll
				) {
					setActiveSection(i);
					section.classList.add("active");
				}
			}
		}

		window.addEventListener("scroll", changeImage);
		changeImage();

		return () => {
			window.removeEventListener("scroll", changeImage);
		};
	}, []);

	// Function to scroll to the next section
	const scrollToNextSection = () => {
		const sections = document.getElementsByClassName("section");
		if (activeSection < sections.length - 1) {
			const nextSection = sections[activeSection + 1];
			const scrollOptions = {
				top: nextSection.offsetTop,
				behavior: "smooth",
				// Add easing for smoother scrolling
				easing: "ease-in-out",
			};
			window.scrollTo(scrollOptions);
			setActiveSection(activeSection + 1);
		}
	};

	return (
		<div>
			<div>
				<div className="section">
					<div className="image-container">
						<div
							className={`image ${activeSection === 0 ? "active" : ""}`}
							style={{ backgroundImage: "url(image1.jpg)" }}
						></div>
						<div className="scroll-container">
							<div
								className={`scrolling-text left ${
									activeSection === 0 ? "active" : ""
								}`}
							>
								<div className="text-4xl font-bold text-white w-80">
									Tina had lost her father to Crohn's disease. Now she faced her
									own diagnosis.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="image-container">
						<div
							className={`image ${activeSection === 1 ? "active" : ""}`}
							style={{ backgroundImage: "url(image2.jpg)" }}
						></div>
						<div className="scroll-container">
							<div
								className={`scrolling-text right ${
									activeSection === 1 ? "active" : ""
								}`}
							>
								<div className="text-4xl font-bold text-white w-80">
									Tina was in her early 20s. She lived in New York City and was
									building a promising future for herself in finance.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="image-container">
						<div
							className={`image ${activeSection === 2 ? "active" : ""}`}
							style={{ backgroundImage: "url(image3.jpg)" }}
						></div>
						<div className="scroll-container">
							<div
								className={`scrolling-text center ${
									activeSection === 2 ? "active" : ""
								}`}
							>
								<div className="text-lg font-bold text-white w-80">
									Then came the diagnosis. Finding out she had Crohn’s disease,
									one of two IBD syndromes that affect 10 million people
									worldwide, wasn’t a surprise considering her family’s history
									with the disease. But it derailed her life. Tina was in her
									early 20s. She lived in New York City and was building a
									promising future for herself in financ
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<button
				className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 p-2 rounded-md text-white"
				onClick={scrollToNextSection}
			>
				Next Section
			</button>
		</div>
	);
}

export default ImageContainer;
