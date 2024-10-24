import type { FC } from "react";
import PokemonCard from "./components/PokemonCard";
import "./components/PokemonCard.css";

const App: FC = () => {
	return (
		<div className="app">
			<PokemonCard />
		</div>
	);
};

export default App;
