import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;
