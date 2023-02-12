import React, { useEffect, useRef } from "react";
import Localizacao from "../Components/Head/Localizacao";
import Header from "../Components/Head/Header";
import Footer from "../Components/Footer";
import Titulo from "../Components/Header/Titulo";
import Titulo2 from "../Components/Header/Titulo2";
import ServicosList from "../Components/Header/ServicosList";
import InViewSection from "../InViewSection";

export default function Home() {
	return (
		<>
			<section className="mainContainer">
				<Header />
				<InViewSection>
					<Titulo />
				</InViewSection>
				<InViewSection>
					<Titulo2 />
				</InViewSection>
				<InViewSection>
					<ServicosList />
				</InViewSection>
				<Footer />
				<Localizacao />
			</section>
		</>
	);
}
