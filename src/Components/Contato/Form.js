import React, { useRef } from "react";
import Button from "../Button";
import styles from "./Form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_iy6zn5f",
				"template_8hm6p3f",
				form.current,
				"GwS-FbYtihip9wEJV"
			)
			.then(
				(result) => {
					alert("Mensagem enviada com sucesso!");
				},
				(error) => {
					alert("Falha ao enviar mensagem, tente novamente.");
				}
			);
	};

	return (
		<>
			<section className="container">
				<div className={styles.form}>
					<form ref={form} onSubmit={sendEmail}>
						<label className={styles.label} htmlFor="name">
							Nome
						</label>
						<input type="text" id="name" name="name" required />
						<label className={styles.label} htmlFor="email">
							Email
						</label>
						<input
							type="text"
							id="email"
							name="email"
							placeholder="email@email.com"
							required
						/>
						<label className={styles.label} htmlFor="number">
							Contato
						</label>
						<input
							type="number"
							id="number"
							name="number"
							placeholder="55-99999-9999"
						/>
						<label className={styles.label} htmlFor="select">
							Assunto
						</label>
						<select
							className="select"
							id="select"
							required
							name="option"
						>
							<option value="">Selecione</option>
							<option value="Geometria">
								Geometria e Balanceamento
							</option>
							<option value="Alinhamento">
								Alinhamento de Eixo
							</option>
							<option value="Manutencao">
								Manutenção Preventiva
							</option>
							<option value="Outro">Outros</option>
						</select>
						<br />
						<br />
						<label className={styles.label} htmlFor="message">
							Mensagem
						</label>
						<textarea
							type="textarea"
							id="message"
							name="message"
							rows="5"
							placeholder="Escreva sua mensagem..."
							required
						/>
						<Button name="Enviar" />
					</form>
				</div>
			</section>
		</>
	);
};

export default Form;
