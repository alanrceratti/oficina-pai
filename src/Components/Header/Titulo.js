import React from "react";
import styles from "./Titulo.module.css";

import EixoTraseiro from "../../Assets/eixo-traseiro.jpg";

const Titulo = () => {
	return (
		<>
			<section id="stickmenu" className="animeLeft">
				<div className={`${styles.main} container `}>
					<h1 className={`${styles.titulo} container`}>
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
						{" "}
						Somos especialistas em geometria e balanceamento. <br />
						<br /> Uma das únicas oficinas a oferecer o serviço de
						alinhamento de eixo traseiro, com qualidade e segurança
						que você merece. <br />
						<br />
						Profissionais com mais de 20 anos de experiência no ramo
						automotivo, seu carro não poderia estar em um lugar
						melhor!{" "}
					</p>
				</div>
			</section>
		</>
	);
};

export default Titulo;
