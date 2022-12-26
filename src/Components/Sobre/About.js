import React from "react";
import styles from "../Sobre/About.module.css";
import Pneu from "../../Assets/pneu.jpg";

const About = () => {
	return (
		<div className="container">
			<h1 className={styles.titulo}>
				Oficina especializada em Geometria e Balanceamento de veículos.
			</h1>
			<div className={styles.paragrafo}>
				<p>
					Na Oficina Ceratti, temos mais de 20 anos de experiência no
					ramo automotivo e especialistas na área de geometria e
					balanceamento de veículos de todos os tipos. Além disso,
					somos uma das poucas oficinas da região que oferecem o
					serviço de alinhamento de eixo traseiro para pick-ups e
					outros veículos de grande porte.
				</p>
				<div className={styles.container}>
					<img src={Pneu} alt="pneu" />
					<p className={styles.p1}>
						Contamos também com equipamentos avançados e uma equipe
						altamente qualificada para garantir a qualidade dos
						serviços prestados. Trabalhamos com agilidade e
						eficiência para que nossos clientes possam retomar suas
						atividades o mais rápido possível. Oferecemos garantia
						nos serviços realizados, pois acreditamos na qualidade
						do nosso trabalho.
					</p>
					<p className={styles.p2}>
						Atendemos tanto particulares quanto empresas, e estamos
						sempre dispostos a atender a todas as necessidades e
						demandas de nossos clientes. Se você precisa de um
						serviço além dos descritos em nosso site, não hesite em
						entrar em contato conosco. Estamos à sua disposição para
						atendê-lo da melhor maneira possível.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
