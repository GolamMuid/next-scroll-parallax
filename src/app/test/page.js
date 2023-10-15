"use client";

import React, { useEffect, useState } from "react";
import Section from "../components/home/Section";

function ImageContainer() {
	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		function changeImage() {
			const scroll1 = window.scrollY + window.innerHeight / 3;
			console.log(scroll1);
			const scroll = scroll1 + 400;
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
				<Section
					activeSection={activeSection}
					img="url(image1.jpg)"
					direction="justify-start"
					text="Tina had lost her father to Crohn's disease. Now she faced her own
					diagnosis."
				/>

				<Section
					activeSection={activeSection}
					img="url(image2.jpg)"
					direction="justify-start"
					text="Tina was in her early 20s. She lived in New York City and was
					building a promising future for herself in finance."
				/>

				<Section
					activeSection={activeSection}
					img="url(image3.jpg)"
					direction="justify-center"
					text="Then came the diagnosis. Finding out she had Crohn’s disease,
					one of two IBD syndromes that affect 10 million people"
				/>
				<Section
					activeSection={activeSection}
					img="url(image1.jpg)"
					direction="justify-start"
					text="Tina had lost her father to Crohn's disease. Now she faced her own
					diagnosis."
				/>

				<Section
					activeSection={activeSection}
					img="url(image2.jpg)"
					direction="justify-start"
					text="Tina was in her early 20s. She lived in New York City and was
					building a promising future for herself in finance."
				/>

				<Section
					activeSection={activeSection}
					img="url(image3.jpg)"
					direction="justify-center"
					text="Then came the diagnosis. Finding out she had Crohn’s disease,
					one of two IBD syndromes that affect 10 million people"
				/>
				<Section
					activeSection={activeSection}
					img="url(image1.jpg)"
					direction="justify-start"
					text="Tina had lost her father to Crohn's disease. Now she faced her own
					diagnosis."
				/>

				<Section
					activeSection={activeSection}
					img="url(image2.jpg)"
					direction="justify-start"
					text="Tina was in her early 20s. She lived in New York City and was
					building a promising future for herself in finance."
				/>
			</div>

			{/* <Section
				activeSection={activeSection}
				img="url(image1.jpg)"
				direction="justify-start"
				text="Tina had lost her father to Crohn's disease. Now she faced her own
					diagnosis."
			/> */}

			<button
				className="next-section-button bg-blue-500 p-2 rounded-md text-white"
				onClick={scrollToNextSection}
			>
				Next Section
			</button>
		</div>
	);
}

export default ImageContainer;
