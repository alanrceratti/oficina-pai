import React from "react";
import styles from "./Header.module.css";
import LogoSF from "../../Assets/logosemfundoazul.jpg";
import Localizacao from "./Localizacao";
import MenuMobile from "./MenuMobile";

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
			</section>
		</>
	);
};

export default Header;
