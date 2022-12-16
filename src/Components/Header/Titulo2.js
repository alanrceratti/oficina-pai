import React from "react";
import styles from "./Titulo2.module.css";

const Titulo2 = () => {
	return (
		<div className={`${styles.titulo2} container`}>
			<h1>Agendamento ONLINE!</h1>
			<p>
				Não tem tempo para ligar? Não se preocupe. Faça seu cadastro{" "}
				<a href="/cadastro">AQUI</a> e agende um horário para o seu
				veículo.
			</p>
		</div>
	);
};

export default Titulo2;
