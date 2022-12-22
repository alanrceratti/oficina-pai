import React from "react";
import styles from "./Titulo2.module.css";
import Contagiro from "../../Assets/agendamento.jpg";

const Titulo2 = () => {
	return (
		<>
			<div className={`${styles.titulo2} container animeLeft`}>
				<img className={styles.img} src={Contagiro} alt="agendamento" />
				<h1>Agendamento ONLINE!</h1>
				<p>Sem tempo para ligar?</p>
				<p>
					Faça seu cadastro <a href="/cadastro">aqui</a> e agende um
					horário para o seu veículo.
				</p>
			</div>
		</>
	);
};

export default Titulo2;
