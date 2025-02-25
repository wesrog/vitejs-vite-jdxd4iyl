import {
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';

const routes = createRoutesFromElements(
  <Route path="/" lazy={() => import('./PokemonList')}>
    <Route path="pokemon/:name" lazy={() => import('./PokemonDetail')} />
  </Route>
)

export default routes