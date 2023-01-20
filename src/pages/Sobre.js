import React from "react";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";
import About from "../Components/Sobre/About";
import Footer from "../Components/Footer";

const Sobre = () => {
	return (
		<section className="mainContainer">
			<Header />
			<About />
			<Footer />
			<Localizacao />
		</section>
	);
};

export default Sobre;
