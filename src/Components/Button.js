import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
	return <button className={styles.botao}>{props.name}</button>;
};

export default Button;
