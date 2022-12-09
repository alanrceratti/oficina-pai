import React from "react";

import styles from "./Home.module.css";
import Menu from "../Components/Menu";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Localizacao from "../Components/Localizacao";
import Titulo from "../Components/Home/Titulo";
import Servicos from "../Components/Home/Servicos";

const Home = () => {
	return (
		<>
			<section className={styles.mainContainer}>
				<Localizacao />
				<Header />
				<Menu />
				<Titulo />
				<Servicos />
				<Localizacao />
				<Footer />
			</section>
		</>
	);
};

export default Home;
