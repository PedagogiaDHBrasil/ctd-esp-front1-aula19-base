import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";

interface ListarPokemonsItemProps {
  pokemon: Pokemon;
  selecionarPokemon: (pokemon: Pokemon) => void;
}

/**
 * Visualizar uma pokemon com seu nome e url
 *
 * Ex:
 * <pre>
 *     <ListarPokemonsItem pokemon={pokemon}
 *                             selecionarPokemon={(pokemon) => {}}/>
 *
 * </pre>
 *
 * @author Digital House
 * @param pokemon o pokémon para mostrar
 * @param selecionarPokemon uma função que é executada quando você clica no pokemon
 */
const ListarPokemonsItem = ({
  pokemon,
  selecionarPokemon,
}: ListarPokemonsItemProps) => (
  <div onClick={() => selecionarPokemon(pokemon)}>
    <strong>{pokemon.name}</strong>
    <small> #{extractPokemonId(pokemon.url)}</small>
  </div>
);

export default ListarPokemonsItem;
