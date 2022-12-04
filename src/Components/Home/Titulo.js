import React from "react";
import styles from "./Titulo.module.css";
import Geometria from "../../Assets/geometria.png";

const Titulo = () => {
	return (
		<>
			<section>
				<h1 className={styles.titulo}>
					Oficina especializada em Geometria e Balanceamento de
					veículos.
				</h1>
				<div className={styles.container}>
					<p className={styles.texto}>
						{" "}
						Aqui somos especialistas em geometria e balanceamento.
						<br />
						Somos também uma das únicas oficinas a oferecer o
						serviço de alinhamento de eixo traseiro, com qualidade e
						segurança que você merece. Profissionais com mais de 20
						anos de experiência no ramo automotivo, seu carro não
						poderia estar em um lugar melhor!{" "}
					</p>
					<img
						className={styles.geometria}
						src={Geometria}
						alt="geometria"
					/>
				</div>
			</section>
		</>
	);
};

export default Titulo;
