import { useLoaderData } from 'react-router-dom';
import { allPokemon } from './mocks/pokemon';

export const loader = ({ params: { name } }) => {
  return allPokemon[name];
};

const PokemonDetailComponent = () => {
  const { name } = useLoaderData();

  return (
    <div>
      <h1 className="text-lg">Pokemon name</h1>
      {name}
    </div>
  );
};
export const Component = PokemonDetailComponent;
