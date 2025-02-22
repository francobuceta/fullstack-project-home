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

interface Ability {
  is_hidden: boolean;
  slot: number;
  name: string;
  url: string;
  ability: { name: string, url: string};
}

interface Type {
  slot: number;
  type: { name: string, url: string};
}

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
}
