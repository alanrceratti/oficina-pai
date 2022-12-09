import React from "react";
import Localizacao from "../Components/Head/Localizacao";
import styles from "./Home.module.css";
import Header from "../Components/Head/Header";
import Footer from "../Components/Footer";
import Titulo from "../Components/Header/Titulo";

const Home = () => {
	return (
		<>
			<section className={styles.mainContainer}>
				<Header />
				<Titulo />
				<Localizacao />
				<Footer />
			</section>
		</>
	);
};

export default Home;
