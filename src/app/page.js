"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
	return (
		<div>
			<Parallax pages={2}>
				<ParallaxLayer
					offset={0}
					speed={0.5} // Adjust the speed as needed
					factor={2}
					sticky={{ start: 1, end: 3 }}
					style={{
						backgroundImage: `url(/img.jpg)`,
						backgroundSize: "cover",
						// backgroundPosition: "center",
					}}
				></ParallaxLayer>

				<ParallaxLayer offset={1.5}>
					<div className=" text-xl font-bold absolute right-10 top-[25%]">
						Hello World
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.5} // Adjust the speed as needed
					factor={2}
					style={{
						backgroundImage: `url(/img2.jpg)`,
						backgroundSize: "cover",
						// backgroundPosition: "center",
						position: "relative",
					}}
				>
					<div className="text-white text-xl font-bold absolute">
						{" "}
						Hello from the other side{" "}
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
