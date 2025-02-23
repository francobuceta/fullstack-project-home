import { FC } from "react";
import { useFavoritesStore } from "../store/favoritesStore";
import { useSidebarStore } from "../store/sidebarStore";
import Button from "./ui/Button";

interface ListCardProps {
  pokemon: PokemonSummary | FavoritePokemon;
}

const ListCard: FC<ListCardProps> = ({ pokemon }) => {
  const { name } = pokemon;
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const { openSidebar } = useSidebarStore();

  const isFavorite = favorites.some((fav) => fav.name === name);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(name);
    } else {
      addFavorite(pokemon);
      openSidebar();
    }
  };

  return (
    <article className="w-full max-w-[250px] h-[350px] mx-auto bg-secondary rounded-md">
      <div className="h-full flex flex-col items-center">
        <div className="w-full bg-white rounded-t-md">
          <img
            src={`https://img.pokemondb.net/artwork/${name}.jpg`}
            alt={name}
            className="w-auto mx-auto h-[220px] p-5"
          />
        </div>
        <div className="h-full flex flex-col items-center gap-5 p-5">
          <span className="font-medium uppercase text-gray-700">{name}</span>
          {isFavorite ? (
            <div className="underline cursor-pointer" onClick={handleFavorite}>
              <span>Delete from favorites</span>
            </div>
          ) : (
            <Button content="Add to favorites" action={handleFavorite} />
          )}
        </div>
      </div>
    </article>
  );
};

export default ListCard;
