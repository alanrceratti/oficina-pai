import React from "react";
import styles from "./Titulo2.module.css";

const Titulo2 = () => {
	return (
		<div className={`${styles.titulo2} container animeLeft`}>
			<h1>Agendamento ONLINE!</h1>
			<p>
				Sem tempo para ligar? <br />
				Faça seu cadastro <a href="/cadastro">aqui</a> e agende um
				horário para o seu veículo.
			</p>
		</div>
	);
};

export default Titulo2;
