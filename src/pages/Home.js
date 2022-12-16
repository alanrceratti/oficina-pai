import React from "react";
import Localizacao from "../Components/Head/Localizacao";
import styles from "./Home.module.css";
import Header from "../Components/Head/Header";
import Footer from "../Components/Footer";
import Titulo from "../Components/Header/Titulo";
import Titulo2 from "../Components/Header/Titulo2";

const Home = () => {
	return (
		<>
			<section className={styles.mainContainer}>
				<Header />
				<Titulo />
				<Titulo2 />
				<Footer />
				<Localizacao />
			</section>
		</>
	);
};

export default Home;
