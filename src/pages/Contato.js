import React from "react";
import Form from "../Components/Contato/Form";
import Head from "../Components/Contato/Head";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";

const Contato = () => {


	return (
		<section>
			<Header />
			<Head />
			<Form />
			<Localizacao />
		</section>
	);
};

export default Contato;
