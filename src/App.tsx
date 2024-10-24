import type { FC } from "react";
import PokemonCard from "./components/PokemonCard";
import "./components/PokemonCard.css";

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

const App: FC = () => {
    return (
        <div className="app">
            <PokemonCard pokemon={pokemonList[0]} />
        </div>
    );
};

export default App;
