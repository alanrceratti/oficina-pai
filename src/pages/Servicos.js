import React from "react";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";
import Titulo from "../Components/Servicos/Titulo";
import Footer from "../Components/Footer";

const Servicos = () => {
	return (
		<>
			<section className="mainContainer">
				<Header />
				<Titulo />
				<Footer />
				<Localizacao />
			</section>
		</>
	);
};

export default Servicos;
