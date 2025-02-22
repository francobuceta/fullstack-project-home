import { useSidebarStore } from "../store/sidebarStore";
import { useFavoritesStore } from "../store/favoritesStore";
import Button from "./ui/Button";

const Sidebar = () => {
  const { isOpen, openSidebar, closeSidebar } = useSidebarStore();
  const { favorites } = useFavoritesStore();

  return (
    <div>
      <div className="fixed top-5 right-5">
        <Button content="Open Menu" action={openSidebar} />
      </div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-secondary p-5 transition-transform duration-300 ${
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

        <div className="flex justify-center pt-10">
          <Button content="Save My List" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
