import React, { useEffect } from "react";
import styles from "./Menu.module.css";
import Roda from "../../Assets/roda.svg";
import useMedia from "../../Hooks/useMedia";
import { NavLink } from "react-router-dom";
import { getOffset } from "../../Hooks/getOffset";

const Menu = () => {
	const mobile = useMedia("(max-width: 24rem)");
	const [mobileMenu, setMobileMenu] = React.useState(false);
	const [isVisible, setIsVisible] = React.useState(true);
	const [isActive, setIsActive] = React.useState(false);
	// const { pathname } = useLocation();
	function handleClick() {
		setMobileMenu(!mobileMenu);
	}
	const toggleClass = () => {
		handleClick();
		setIsActive(!isActive);
	};
	const listenToScroll = () => {
		const heighToHide = getOffset(document.getElementById("stickmenu"));
		const windowScrollHeight =
			document.body.scrollTop || document.documentElement.scrollTop;
		if (windowScrollHeight > heighToHide) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

	// function handleActive() {
	// 	setIsActive((current) => !current);
	// }

	// React.useEffect(() => {
	// 	setMobileMenu(false);
	// }, [pathname]);
	// console.log(pathname);

	return (
		<>
			<section className={styles.menublock}>
				{mobile && isVisible && (
					<div className={styles.menumobile}>
						<div className={styles.menuLine}>
							<NavLink>
								<img
									src={Roda}
									className={
										isActive
											? `${styles.roda} ${mobileMenu} ${styles.rodaActive}`
											: `${styles.roda} ${mobileMenu}`
									}
									alt="App-logo"
									onClick={toggleClass}
								/>
							</NavLink>
							<button
								className={styles.linha}
								onClick={toggleClass}
							>
								MENU
							</button>
						</div>
					</div>
				)}{" "}
				{mobile && !isVisible && (
					<div className={` ${styles.menumobileActive}`}>
						<div className={`${styles.menuLine} `}>
							<NavLink>
								<img
									src={Roda}
									className={
										isActive
											? `${styles.roda} ${mobileMenu} ${styles.rodaActive}`
											: `${styles.roda} ${mobileMenu}`
									}
									alt="App-logo"
									onClick={toggleClass}
								/>
							</NavLink>
							<button
								className={styles.linha}
								onClick={toggleClass}
							>
								MENU
							</button>
						</div>
					</div>
				)}
				<section>
					<nav
						className={`${styles.menu} ${
							mobileMenu && styles.menuActive
						}`}
					>
						{" "}
						{isVisible && (
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
						)}
						{!isVisible && (
							<div
								className={`${styles.menucontainer} ${styles.menuopen}`}
							>
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
						)}
					</nav>
				</section>
			</section>
		</>
	);
};

export default Menu;
