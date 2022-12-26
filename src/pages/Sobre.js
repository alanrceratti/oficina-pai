import React from "react";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";
import About from "../Components/Sobre/About";

const Sobre = () => {
	return (
		<section className="mainContainer">
			<Header />
			<About />
			<Localizacao />
		</section>
	);
};

export default Sobre;
