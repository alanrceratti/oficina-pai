import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agendamentos from "./pages/Agendamentos";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/agendamentos" element={<Agendamentos />} />
					<Route path="/sobre" element={<Sobre />} />
					<Route path="/servicos" element={<Servicos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
