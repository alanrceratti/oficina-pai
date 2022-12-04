import React from "react";
import styles from "./Header.module.css";
import Logo from "../Assets/Logoimg.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<section>
			<Link className={styles.logoImg} to="/" aria-label="Ceratti">
				<img className="logo" src={Logo} alt="Ceratti-logo" />
			</Link>
		</section>
	);
};

export default Header;
