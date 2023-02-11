import React from "react";
import Form from "../Components/Contato/Form";
import Head from "../Components/Contato/Head";
import Hours from "../Components/Contato/Hours";
import Map from "../Components/Contato/Map";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Contato = () => {
	return (
		<section className="mainContainer">
			<Header />
			<motion.div
				initial={{ x: -300 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Head />
				<Form />
				<Hours />
				<Map />
			</motion.div>
			<Footer />
			<Localizacao />
		</section>
	);
};

export default Contato;
