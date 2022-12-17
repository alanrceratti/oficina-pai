import React from "react";
import styles from "./Footer.module.css";
import Messenger from "../Assets/messenger.svg";
import Face from "../Assets/face.svg";
import Whats from "../Assets/whats.svg";

const Footer = () => {
	return (
		<section className={styles.footermain}>
			<div className={styles.footer}>
				<h1 className={styles.horario}>
					Horários de atendimento:
					<br /> Seg - Sexta das 8:00 às 18:00 <br />
					Sábado das 8:00 às 13:00 <br />
					Domingo - Fechado
				</h1>
				<span></span>
				<h1 className={styles.contato}>
					Contatos: <br />
					Fixo: (55) 3221-2273 <br />
					Celular: (55)99996-5450 <br />
					Email: rogerio-ceratti@hotmail.com
				</h1>
			</div>
			<ul className={styles.icons}>
				<li>
					<a href="https://wa.me/+5555999965450">
						<img src={Messenger} alt="messenger" />
					</a>
				</li>{" "}
				<li>
					<a href="https://wa.me/+5555999965450">
						<img src={Face} alt="messenger" />
					</a>
				</li>{" "}
				<li>
					<a href="https://wa.me/+5555999965450">
						<img src={Whats} alt="messenger" />
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Footer;
