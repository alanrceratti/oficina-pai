import React from "react";
import styles from "./Menu.module.css";
import Roda from "../Assets/roda.svg";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<section>
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
	);
};

export default Menu;
