import type { FC } from "react";

const PokemonCard: FC = ({ pokemon }) => {
    // Supprime le console.log(props)
    // Supprime la ligne const pokemon = { name: "mew", imgSrc: null };

    return (
        <figure className="pokemon-card">
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
};

export default PokemonCard;
