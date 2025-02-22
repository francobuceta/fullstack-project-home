interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
}

interface PokemonSummary {
  name: string;
  url: string;
}
