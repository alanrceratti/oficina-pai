import React from "react";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";
import Titulo from "../Components/Servicos/Titulo";

const Servicos = () => {
	return (
		<>
			<section className="mainContainer">
				<Header />
				<Titulo />
				<Localizacao />
			</section>
		</>
	);
};

export default Servicos;
