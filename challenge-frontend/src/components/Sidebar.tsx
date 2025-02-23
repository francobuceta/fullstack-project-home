import { useState } from "react";
import { useSidebarStore } from "../store/sidebarStore";
import { useFavoritesStore } from "../store/favoritesStore";
import { saveFavoritesList } from "../libs/backend";
import Button from "./ui/Button";

const Sidebar = () => {
  const [savedListId, setSavedListId] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const { isOpen, openSidebar, closeSidebar } = useSidebarStore();
  const { favorites } = useFavoritesStore();

  const handleFavoriteList = async () => {
    setError(false);
    if (favorites.length > 0) {
      const { data, error } = await saveFavoritesList(
        "http://localhost:3000/favorites",
        favorites
      );
      if (error) {
        setError(true);
      }
      if (data) {
        setSavedListId(data.id);
      }
    }
  };

  return (
    <div>
      <div className="fixed top-5 right-5">
        <Button content="Open Menu" action={openSidebar} />
      </div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-secondary p-5 transition-transform duration-300 z-50 ${
          isOpen ? "transform-none" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end pb-10">
          <Button content="Close Menu" action={closeSidebar} />
        </div>
        <h2 className="text-2xl font-semibold mb-5">Favorites Pokemons</h2>
        <ul className="space-y-4">
          {favorites.length === 0 ? (
            <li>Nothing yet..</li>
          ) : (
            favorites.map((pokemon) => (
              <li key={pokemon.name} className="flex items-center space-x-2">
                <span className="uppercase">{pokemon.name}</span>
              </li>
            ))
          )}
        </ul>

        {savedListId ? (
          <div className="pt-10 text-white">
            <div className="px-3 py-4 bg-green-600 rounded-md">
              <p>Your list has been saved successfully!</p>
              <p>You can check it with this ID:</p>
              <p className="pt-3">{savedListId}</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center pt-10">
            <Button content="Save My List" action={handleFavoriteList} />
          </div>
        )}

        {
          error &&
          <div className="pt-3">
            <span>An error occurred while saving the list, try again later</span>
          </div>
        }
      </div>
    </div>
  );
};

export default Sidebar;
