import { create } from "zustand";

interface FavoritesStore {
  favorites: FavoritePokemon[];
  addFavorite: (pokemon: FavoritePokemon) => void;
  removeFavorite: (pokemon: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],
  addFavorite: (pokemon) =>
    set((state) => {
      // Check if Pokemon is already in favorites
      if (!state.favorites.some((fav) => fav.name === pokemon.name)) {
        return { favorites: [...state.favorites, pokemon] };
      }
      return state;
    }),
  removeFavorite: (pokemonIndex) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (pokemon) => pokemon.name !== pokemonIndex,
      ),
    })),
}));
