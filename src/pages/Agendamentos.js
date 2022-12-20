import React from "react";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";
import AgendamentosHome from "../Components/Agendamentos/AgendamentosHome";

const Agendamentos = () => {
	return (
		<section>
			<Header />
			<AgendamentosHome />
			<Localizacao />
		</section>
	);
};

export default Agendamentos;
