import React from "react";
import style from "./Servicos.module.css";
import Oil from "../../Assets/oil.png";
import Suspension from "../../Assets/suspension.png";
import Service from "../../Assets/service.png";
import Eixo from "../../Assets/eixo.png";

const Servicos = () => {
	return (
		<>
			<section>
				<div className={style.servicos}>
					<div className={style.servico}>
						<img src={Suspension} alt="Suspensao" />
						<h1>Geometria e Balanceamento</h1>
					</div>
					<div className={style.servico}>
						<img src={Eixo} alt="Eixos" />
						<h1>Alinhamento de eixo traseiro</h1>
					</div>
					<div className={style.servico}>
						<img src={Oil} alt="TrocaDeOleo" />
						<h1>Troca de óleo</h1>
					</div>
					<div className={style.servico}>
						<img src={Service} alt="Manutencao" />
						<h1>Manutenção preventiva</h1>
					</div>
				</div>
			</section>
		</>
	);
};

export default Servicos;
