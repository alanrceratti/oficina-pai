import React from "react";
import style from "./ServicosList.module.css";
import Oil from "../../Assets/oil.png";
import Suspension from "../../Assets/suspension.png";
import Service from "../../Assets/service.png";
import Eixo from "../../Assets/eixo.png";
import Geometria from "../../Assets/geometria.png";

const ServicosList = () => {
	return (
		<>
			<section className={`${style.servi} container animeLeft`}>
				<div className={style.maincontainer}>
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
					<img
						className={style.geometria}
						src={Geometria}
						alt="geometria"
					/>
				</div>
			</section>
		</>
	);
};

export default ServicosList;
