import React from "react";
import styles from "./Titulo.module.css";
import Checkmark from "../../Assets/Checkmark.png";
import EixoTraseiro from "../../Assets/eixo-traseiro.jpg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Bmw from "../../Assets/bmw.jpg";
import useMedia from "../../Hooks/useMedia";

const Titulo = () => {
	const mobile = useMedia("(max-width: 30rem)");

	const navigate = useNavigate();
	const navigateContato = () => {
		// 👇️ navigate to /
		navigate("/Contato");
	};

	return (
		<>
			<section className="animeLeft">
				<div className={`${styles.main} container `}>
					<h1 className={`${styles.titulo}`}>
						Oficina especializada em Geometria e Balanceamento de
						veículos.
					</h1>

					<img className={styles.bmw} src={Bmw} alt="bmw" />
					<div className={styles.divAgendar}>
						<Button
							onClick={navigateContato}
							className={styles.agendar}
							name="Agendar Agora"
						/>
					</div>
				</div>
				<div className={`${styles.container} container`}>
					{!mobile ? (
						<img
							className={styles.geometria}
							src={EixoTraseiro}
							alt="geometria"
						/>
					) : null}
					<div className={`${styles.paragrafo} container`}>
						<p>
							<img src={Checkmark} alt="mark" /> Somos
							especialistas em geometria e balanceamento.
						</p>

						<p>
							<img src={Checkmark} alt="mark" /> Uma das únicas
							oficinas a oferecer o serviço de alinhamento de eixo
							traseiro, com qualidade e segurança que você merece.
						</p>

						<p>
							<img src={Checkmark} alt="mark" /> Há mais de 20
							anos de experiência no ramo automotivo.
						</p>
						<p>
							<img src={Checkmark} alt="mark" /> Trabalho com
							rapidez e eficiência para minimizar o tempo de
							espera dos nossos clientes.
						</p>
						<p>
							<img src={Checkmark} alt="mark" /> Garantia em todos
							os serviços realizados.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Titulo;
