import { PokemonData } from "@/types/Pokemon";
import Image from "next/image";
import { notFound } from "next/navigation";

async function fetchPokemon(pokemonName: string): Promise<PokemonData> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      notFound();
    }

    return response.json();
  } catch {
    notFound();
  }
}

interface PokemonPageProps {
  params: Promise<{ pokemonName: string }>;
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const resolvedParams = await params;
  const pokemon = await fetchPokemon(resolvedParams.pokemonName);
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-3xl capitalize mb-4">{pokemon.name}</h1>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
