import React from "react";
import styles from "./Header.module.css";
import LogoSF from "../../Assets/logosemfundoazul.png";
import Localizacao from "./Localizacao";
import MenuMobile from "./MenuMobile";
import Login from "../../pages/Login";

const Header = () => {
	return (
		<>
			<section>
				<Localizacao />
				<div className={`${styles.logoImg} bg`} aria-label="Ceratti">
					<a href="/" className={styles.logo}>
						<img src={LogoSF} alt="Ceratti-logo" />
					</a>
				</div>
				<MenuMobile />
				<Login />
			</section>
		</>
	);
};

export default Header;
