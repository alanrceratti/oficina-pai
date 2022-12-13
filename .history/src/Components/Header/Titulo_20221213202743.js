import React from "react";
import styles from "./Titulo.module.css";
import Geometria from "../../Assets/geometria.png";

const Titulo = () => {
	return (
		<>
			<section>
				<h1 className={`${styles.titulo} container`}>
					Oficina especializada em Geometria e Balanceamento de
					veículos.asda
				</h1>
				<div className={`${styles.container} container`}>
					<p className={`${styles.texto} container`}>
						{" "}
						Somos especialistas em geometria e balanceamento. <br />
						<br /> Somos também uma das únicas oficinas a oferecer o
						serviço de alinhamento de eixo traseiro, com qualidade e
						segurança que você merece. <br />
						Profissionais com mais de 20 anos de experiência no ramo
						automotivo, seu carro não poderia estar em um lugar
						melhor!{" "}
					</p>
					<img
						className={styles.geometria}
						src={Geometria}
						alt="geometria"
					/>
				</div>
				<div className={`${styles.titulo2} container`}>
					<h1>Agendamento ONLINE!</h1>
					<p>
						Não tem tempo para ligar? Não se preocupe. Faça seu
						cadastro <a href="/cadastro">AQUI</a> e agende um
						horário para o seu veículo.
					</p>
				</div>
			</section>
		</>
	);
};

export default Titulo;
