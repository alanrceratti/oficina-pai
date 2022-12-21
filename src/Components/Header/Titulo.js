import React from "react";
import styles from "./Titulo.module.css";
import Checkmark from "../../Assets/Checkmark.png";
import EixoTraseiro from "../../Assets/eixo-traseiro.jpg";

const Titulo = () => {
	return (
		<>
			<section id="stickmenu" className="animeLeft">
				<div className={`${styles.main} container `}>
					<h1 className={`${styles.titulo}`}>
						Oficina especializada em Geometria e Balanceamento de
						veículos.
					</h1>
				</div>
				<div className={`${styles.container} container`}>
					<img
						className={styles.geometria}
						src={EixoTraseiro}
						alt="geometria"
					/>
					<p className={`${styles.texto} container`}>
						<p className={styles.paragrafo}>
							<img src={Checkmark} alt="mark" /> Somos
							especialistas em geometria e balanceamento.
						</p>

						<p className={styles.paragrafo}>
							<img src={Checkmark} alt="mark" /> Uma das únicas
							oficinas a oferecer o serviço de alinhamento de eixo
							traseiro, com qualidade e segurança que você merece.
						</p>

						<p className={styles.paragrafo}>
							<img src={Checkmark} alt="mark" /> Profissionais com
							mais de 20 anos de experiência no ramo automotivo,
							seu carro não poderia estar em um lugar melhor!
						</p>
					</p>
				</div>
			</section>
		</>
	);
};

export default Titulo;
