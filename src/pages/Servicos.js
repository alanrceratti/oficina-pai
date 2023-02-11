import React from "react";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";
import Titulo from "../Components/Servicos/Titulo";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Servicos = () => {
	return (
		<>
			<section className="mainContainer">
				<Header />
				<motion.div
					initial={{ x: -300 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Titulo />
					<Footer />
					<Localizacao />
				</motion.div>
			</section>
		</>
	);
};

export default Servicos;
