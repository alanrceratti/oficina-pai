import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function InViewSection({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 100px -150px 0px",
		once: true,
	});

	useEffect(() => {
		// console.log("Element is in view: ", isInView);
	}, [isInView]);

	return (
		<section ref={ref} className="mainContainer">
			<span
				style={{
					display: "flex",
					width: "100%",
					transform: isInView ? "none" : "translateX(-200px)",
					WebkitTransform: isInView ? "none" : "translateX(-200px)",
					MozTransform: isInView ? "none" : "translateX(-200px)",
					msTransform: isInView ? "none" : "translateX(-200px)",
					OTransform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,

					transition: "all 1s ",
				}}
			>
				{children}
			</span>
		</section>
	);
}

export default InViewSection;
