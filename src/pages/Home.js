import React from "react";
import { ReactComponent as Logo } from "../Assets/Logo.svg";
import Roda from "../Assets/roda.svg";

import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<>
			<section className={styles.container}>
				<Link className={styles.logo} to="/" aria-label="Ceratti">
					<Logo />
				</Link>
				<div className={styles.menuLine}>
					<img
						src={Roda}
						className={`${styles.roda} menu-button `}
						alt="App-logo"
					/>
					<div className={styles.linha}></div>
				</div>
				<nav className={styles.menu}>
					<div className={styles.container}>
						<Link className={styles.link} to="/agendamentos">
							Agendamentos
						</Link>
						<Link className={styles.link} to="/servicos">
							Serviços
						</Link>
						<Link className={styles.link} to="/sobre">
							Sobre nós
						</Link>
						<Link className={styles.link} to="/contato">
							Contato
						</Link>
					</div>
				</nav>
			</section>
		</>
	);
};

export default Home;
