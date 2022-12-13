import React from "react";
import styles from "./Menu.module.css";
import Roda from "../../Assets/roda.svg";
import useMedia from "../../Hooks/useMedia";
import { NavLink } from "react-router-dom";

const Menu = () => {
	const mobile = useMedia("(max-width: 24rem)");
	const [mobileMenu, setMobileMenu] = React.useState(false);
	// const { pathname } = useLocation();

	// React.useEffect(() => {
	// 	setMobileMenu(false);
	// }, [pathname]);
	// console.log(pathname);

	return (
		<>
			<section className={styles.menumobile}>
				{mobile && (
					<div className={styles.menuLine}>
						<NavLink>
							<img
								src={Roda}
								className={`${styles.roda} menu-button ${
									mobileMenu && styles.rodaActive
								} `}
								alt="App-logo"
								onClick={() => setMobileMenu(!mobileMenu)}
							/>
						</NavLink>
						<button
							className={styles.linha}
							onClick={() => setMobileMenu(!mobileMenu)}
						>
							MENU
						</button>
					</div>
				)}
				<section className={styles.absolute}>
					<nav
						className={`${styles.menu} ${
							mobileMenu && styles.menuActive
						}`}
					>
						<div className={styles.menucontainer}>
							<a className={styles.link} href="/agendamentos">
								Agendamentos
							</a>
							<a className={styles.link} href="/servicos">
								Serviços
							</a>
							<a className={styles.link} href="/sobre">
								Sobre nós
							</a>
							<a className={styles.link} href="/contato">
								Contato
							</a>
						</div>
					</nav>
				</section>
			</section>
		</>
	);
};

export default Menu;
