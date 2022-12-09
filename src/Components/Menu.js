import React from "react";
import styles from "./Menu.module.css";
import Roda from "../Assets/roda.svg";
import { Link, useLocation } from "react-router-dom";
import useMedia from "../Hooks/useMedia";
import { NavLink } from "react-router-dom";

const Menu = () => {
	const mobile = useMedia("(max-width: 40rem)");
	const [mobileMenu, setMobileMenu] = React.useState(false);
	const { pathname } = useLocation();

	React.useEffect(() => {
		setMobileMenu(false);
	}, [pathname]);

	return (
		<>
			<section className={styles.menumobile}>
				{mobile && (
					<div className={styles.menuLine}>
						<NavLink>
							<img
								src={Roda}
								className={`${
									styles.roda
								} menu-button App-logo  ${
									mobileMenu && styles.rodaActive
								} `}
								alt="App-logo"
								onClick={() => setMobileMenu(!mobileMenu)}
							/>
						</NavLink>
						<div className={styles.linha}></div>
					</div>
				)}
				<section>
					<nav
						className={`${styles.menu} ${
							mobileMenu && styles.menuActive
						}`}
					>
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
			</section>
		</>
	);
};

export default Menu;
