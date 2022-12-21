import React from "react";
import Form from "../Components/Contato/Form";
import Head from "../Components/Contato/Head";
import Hours from "../Components/Contato/Hours";
import Map from "../Components/Contato/Map";
import Header from "../Components/Head/Header";
import Localizacao from "../Components/Head/Localizacao";

const Contato = () => {
	return (
		<section className="mainContainer">
			<Header />
			<Head />
			<Form />
			<Hours />
			<Map />
			<Localizacao />
		</section>
	);
};

export default Contato;
