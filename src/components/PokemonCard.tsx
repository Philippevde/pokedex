import type { FC } from 'react';

const PokemonCard: FC = () => {
  return (
    <figure className="pokemon-card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );
};

export default PokemonCard;
