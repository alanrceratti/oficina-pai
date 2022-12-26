import React from "react";
import styles from "../Servicos/Titulo.module.css";
import faq from "./faq.json";
import Arrow from "../../Assets/arroww.png";

const Titulo = () => {
	const data = { faq };
	const [isActive, setIsActive] = React.useState([]);
	const [isVisible, setIsVisible] = React.useState(null);

	function handleVisible() {
		setIsVisible(!isVisible);
	}

	return (
		<section className="container">
			<h1 className={styles.titulo}>
				Conheça alguns de nossos serviços e a importancia de cada um
				para o seu veículo:
			</h1>
			<ul>
				{data.faq.map((category) => (
					<li key={category.category}>
						<h2 className={styles.nome_servico}>
							{category.category}:
						</h2>
						<ul className={styles.perguntas}>
							{category.questions.map((question) => (
								<li key={question.question}>
									<h3
										onClick={() => {
											setIsActive(question.id);
											handleVisible(!isVisible);
										}}
									>
										{question.question}
									</h3>
									<img
										className={styles.seta}
										src={Arrow}
										alt="seta"
									/>
									<p
										className={`${
											isActive === question.id &&
											isVisible === true
												? styles.respostaActive
												: styles.resposta
										} `}
									>
										{question.answer}
									</p>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Titulo;
