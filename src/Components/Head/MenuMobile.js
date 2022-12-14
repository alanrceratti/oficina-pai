import React, { useEffect, useState, useRef } from "react";
import styles from "./MenuMobile.module.css";
import Roda from "../../Assets/roda.svg";
import useMedia from "../../Hooks/useMedia";
import { NavLink, useLocation } from "react-router-dom";
import { getOffset } from "../../Hooks/getOffset";

const MenuMobile = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const mobile = useMedia("(max-width: 26rem)");
	const [mobileMenu, setMobileMenu] = React.useState(false);
	const [isVisible, setIsVisible] = React.useState(true);
	const [isActive, setIsActive] = React.useState(false);
	const { pathname } = useLocation;
	const ref = useRef();

	// --------------------------------------------
	// verificar toque fora do menu para fechar

	useEffect(() => {
		const outsideClick = (e) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (mobileMenu && ref.current && !ref.current.contains(e.target)) {
				setMobileMenu(false);
			}
		};

		document.addEventListener("touchend", outsideClick);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("touchend", outsideClick);
		};
	}, [mobileMenu]);

	// --------------------------------------------
	// verificar scroll para fechar menu
	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		if (currentScrollPos > prevScrollPos) {
			setMobileMenu(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
	// --------------------------------------------
	// abrir e fechar menu
	function handleClick() {
		setMobileMenu(!mobileMenu);
		toggleClass();
	}
	const toggleClass = () => {
		setIsActive(!isActive);
	};
	// --------------------------------------------

	// verificar distancia do elemento ao fazer scroll
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

	// verificar distancia do elemento ao fazer scroll
	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);
	// --------------------------------------------

	// Fechar menu ao clicar no item
	React.useEffect(() => {
		setMobileMenu(false);
	}, [pathname]);
	// --------------------------------------------

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
										mobileMenu
											? `${styles.roda} ${styles.rodaActive}`
											: `${styles.roda}  `
									}
									alt="App-logo"
									onClick={handleClick}
								/>
							</NavLink>
							<button
								className={styles.linha}
								onClick={handleClick}
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
										mobileMenu
											? `${styles.roda} ${styles.rodaActive}`
											: `${styles.roda}`
									}
									alt="App-logo"
									onClick={handleClick}
								/>
							</NavLink>
							<button
								className={styles.linha}
								onClick={handleClick}
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
							<div
								ref={ref}
								className={`${styles.menucontainer} ${styles.menucontainerActive}`}
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
						{!isVisible && (
							<div
								ref={ref}
								className={`${styles.menucontainer} ${styles.menuopen}  ${styles.menucontainerActive}`}
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

export default MenuMobile;
