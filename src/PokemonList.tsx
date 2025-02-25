import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import { pages } from './mocks/pokemon';

// React Router loaders are called when a route from routes.tsx is matched
// A loader can access things like the request as well as route params
export const loader = ({ request }) => {
  const url = new URL(request.url);
  const qs = new URLSearchParams(url.search);
  const page = parseInt(qs.get('page')) || 0;

  return {
    data: pages[page],
    page,
  };
};

const PokemonListComponent = () => {
  // here we can access the data returned from a React Router loader using a hook
  const { data, page } = useLoaderData();

  // here we can get the `name` param from the route (`/pokemon/:name`)
  const { name } = useParams();

  return (
    <>
      <h1 className="m-4 text-lg">Pokemon!</h1>

      <div className="flex m-4 gap-4">
        <div className="flex flex-col bg-white rounded-lg shadow-md p-4 min-w-40 gap-2">
          {data.map(([_, pokemon]) => {
            return (
              <Link
                to={`/pokemon/${pokemon.name}?page=${page}`}
                className="p-2 hover:bg-violet-500 hover:text-white"
              >
                {pokemon.name}
              </Link>
            );
          })}

          <div className="flex gap-2">
            <Link
              to={`/?page=${page - 1}`}
              className="bg-slate-300 hover:bg-slate-500 p-2 rounded-lg hover:text-white"
            >
              Prev
            </Link>

            <Link
              to={`/?page=${page + 1}`}
              className="bg-slate-300 hover:bg-slate-500 p-2 rounded-lg hover:text-white"
            >
              Next
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 min-w-80">
          {!name && <h1 className="text-lg">Select a pokemon!</h1>}

          {name && <Outlet />}
        </div>
      </div>
    </>
  );
};

export const Component = PokemonListComponent;
