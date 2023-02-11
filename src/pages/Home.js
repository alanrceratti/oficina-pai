import React, { useEffect, useRef } from "react";
import Localizacao from "../Components/Head/Localizacao";
import Header from "../Components/Head/Header";
import Footer from "../Components/Footer";
import Titulo from "../Components/Header/Titulo";
import Titulo2 from "../Components/Header/Titulo2";
import ServicosList from "../Components/Header/ServicosList";
import { useInView } from "framer-motion";

function Section({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		console.log("Element is in view: ", isInView);
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

export default function Home() {
	return (
		<>
			<Section>
				<Header />
				<Section>
					<Titulo />
				</Section>
				<Section>
					<Titulo2 />
				</Section>
				<Section>
					<ServicosList />
				</Section>
				<Footer />
				<Localizacao />
			</Section>
		</>
	);
}
