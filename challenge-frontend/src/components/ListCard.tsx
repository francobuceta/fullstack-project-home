import { FC } from "react";
import Button from "./ui/Button";

interface ListCardProps {
  pokemon: PokemonSummary;
}

const ListCard: FC<ListCardProps> = ({ pokemon }) => {
  const { name } = pokemon;
  return (
    <article className="w-full max-w-[250px] h-[350px] bg-secondary rounded-md">
      <div className="h-full flex flex-col items-center">
        <div className="w-full bg-white rounded-t-md">
          <img
            src={`https://img.pokemondb.net/artwork/${name}.jpg`}
            alt={name}
            className="w-auto h-[220px] p-5"
          />
        </div>
        <div className="h-full flex flex-col items-center gap-5 p-5">
          <span className="font-medium uppercase text-gray-700">{name}</span>
          <Button content="Agregar a favoritos" />
        </div>
      </div>
    </article>
  );
};

export default ListCard;
