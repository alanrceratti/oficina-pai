// import React from "react";
// import Button from "../Button";
// import styles from "./Form.module.css";

// const Form = () => {
// 	const [name, setName] = React.useState("");
// 	const [email, setEmail] = React.useState("");
// 	const [number, setNumber] = React.useState("");
// 	const [select, setSelect] = React.useState("");
// 	const [message, setMessage] = React.useState("");

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 	}

// 	return (
// 		<>
// 			{" "}
// 			<section className="container">
// 				<div className={styles.form}>
// 					<form onSubmit={handleSubmit}>
// 						<label className={styles.label} htmlFor="name">
// 							Nome
// 						</label>
// 						<input
// 							type="text"
// 							id="name"
// 							name="name"
// 							value={name}
// 							onChange={({ target }) => setName(target.value)}
// 						/>

// 						<label className={styles.label} htmlFor="email">
// 							Email
// 						</label>
// 						<input
// 							type="text"
// 							id="email"
// 							name="email"
// 							value={email}
// 							onChange={({ target }) => setEmail(target.value)}
// 							placeholder="email@email.com"
// 						/>

// 						<label className={styles.label} htmlFor="number">
// 							Contato
// 						</label>
// 						<input
// 							type="text"
// 							id="number"
// 							name="number"
// 							value={number}
// 							onChange={({ target }) => setNumber(target.value)}
// 							placeholder="(55) 99999-9999"
// 						/>

// 						<label className={styles.label} htmlFor="select">
// 							Assunto
// 						</label>
// 						<select
// 							className="select"
// 							id="select"
// 							value={select}
// 							onChange={({ target }) => setSelect(target.value)}
// 						>
// 							<option disabled value="">
// 								Selecione
// 							</option>
// 							<option value="Geometria">
// 								Geometria e Balanceamento
// 							</option>
// 							<option value="Alinhamento">
// 								Alinhamento de Eixo
// 							</option>
// 							<option value="Manutencao">
// 								Manutenção Preventiva
// 							</option>
// 							<option value="Outro">Outros</option>
// 						</select>
// 						<br />
// 						<br />
// 						<label className={styles.label} htmlFor="message">
// 							Mensagem
// 						</label>
// 						<textarea
// 							type="textarea"
// 							id="message"
// 							name="message"
// 							value={message}
// 							onChange={({ target }) => setMessage(target.value)}
// 							rows="5"
// 							placeholder="Escreva sua mensagem..."
// 						/>
// 						<Button name="Enviar" />
// 					</form>
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default Form;
