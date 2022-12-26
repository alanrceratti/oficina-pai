import React from "react";
import Localizacao from "../Components/Head/Localizacao";
import Header from "../Components/Head/Header";
import Footer from "../Components/Footer";
import Titulo from "../Components/Header/Titulo";
import Titulo2 from "../Components/Header/Titulo2";
import ServicosList from "../Components/Header/ServicosList";

const Home = () => {
	return (
		<>
			<section className="mainContainer">
				<Header />
				<Titulo />
				<Titulo2 />
				<ServicosList />
				<Footer />
				<Localizacao />
			</section>
		</>
	);
};

export default Home;
