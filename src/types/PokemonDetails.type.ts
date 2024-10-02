export interface PokemonDetailsType {
  abilities: Abilities[];
  base_experience?: number;
  cries?: { latest: string; legacy: string };
  froms?: Form[];
  game_indices?: Game_indices[];
  height: number;
  held_items?: Held_items[];
  id: number;
  is_default: boolean;
  location_area_encounters?: string;
  moves: any[];
  name: string;
  order?: number;
  past_abilities?: any[];
  past_types?: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: Sprite;
  types: any[];
  stats: any[];
}

interface Abilities {
  ability: { name: string; url: string };
  is_hidden: false;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}

interface Game_indices {
  game_index: number;
  version: { name: string; url: string };
}

interface Held_items {
  item: { name: string; url: string };
  version_details: Version_details[];
}

interface Version_details {
  rarity: number;
  version: { name: string; url: string };
}

interface Sprite {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  versions?: any[]
}
