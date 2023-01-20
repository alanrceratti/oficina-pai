import React from "react";
import styles from "./Titulo2.module.css";
import Contagiro from "../../Assets/agendamento.jpg";

const Titulo2 = () => {
	return (
		<>
			<div className={`${styles.titulo2} container animeLeft`}>
				<img
					className={styles.contagiro}
					src={Contagiro}
					alt="agendamento"
				/>
				<h1>Agendamento ONLINE!</h1>
				<div className={styles.glass}>
					<p>Sem tempo para ligar?</p>
					<p>
						Preencha o formulário <a href="/contato">aqui</a> e
						agende um horário para o seu veículo.
					</p>
				</div>
			</div>
		</>
	);
};

export default Titulo2;
