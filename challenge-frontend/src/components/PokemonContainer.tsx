import { useState } from "react";
import { useFetchAllPokemon } from "../hooks/useFetch";
import { fetchPokemonDetails } from "./libs/api";
import List from "./List";
import Details from "./Details";
import Button from "./ui/Button";
import Searchbar from "./ui/Searchbar";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const PokemonContainer = () => {
  const [query, setQuery] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);
  const { data, isLoading, isError, refetch } = useFetchAllPokemon(API_URL);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (query.length === 0) {
      setQuery("");
      setPokemonDetails(null);
    }
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = async () => {
    if (query.length > 3) {
      const { data } = await fetchPokemonDetails(
        `${API_URL}/${query.toLowerCase()}`
      );
      if (data) {
        setPokemonDetails(data);
      }
    }
  };
  console.log(pokemonDetails);
  
  return (
    <div>
      <div className="w-full flex justify-center items-center gap-5 pb-10">
        <Searchbar query={query} handleInputChange={handleInputChange} />
        <Button content="Buscar" action={handleSearch} />
      </div>
      {query && pokemonDetails ? (
        <Details data={pokemonDetails} />
      ) : (
        data && (
          <List
            data={data}
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
          />
        )
      )}
    </div>
  );
};

export default PokemonContainer;
