import React from "react";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";
import About from "../Components/Sobre/About";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Sobre = () => {
	return (
		<section className="mainContainer">
			<Header />
			<motion.div
				initial={{ x: -300 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.5 }}
			>
				<About />
			</motion.div>
			<Footer />
			<Localizacao />
		</section>
	);
};

export default Sobre;
