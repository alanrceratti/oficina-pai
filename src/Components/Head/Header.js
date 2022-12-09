import React from "react";
import styles from "./Header.module.css";
import LogoSF from "../../Assets/logosemfundo.png";

import Localizacao from "./Localizacao";
import Menu from "./Menu";

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
				<Menu />
			</section>
		</>
	);
};

export default Header;
