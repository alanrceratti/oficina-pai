import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function InViewSection({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		// console.log("Element is in view: ", isInView);
	}, [isInView]);

	return (
		<section ref={ref} className="mainContainer">
			<span
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
			>
				{children}
			</span>
		</section>
	);
}

export default InViewSection;
