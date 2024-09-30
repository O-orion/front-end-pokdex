import { TypesPokemon } from "../types/Types.enum";

export const capitalizeFirstLetter = (name: string): string => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export const getTypeColor = (typeName: string): string => {
    return TypesPokemon[typeName as keyof typeof TypesPokemon] || '#000';
}
