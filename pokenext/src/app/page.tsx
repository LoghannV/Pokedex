"use client"
import BoxPokemon from "./components/BoxPokemon";
import { useEffect, useState } from "react";

export default function Home() {
  const [kanto, setKanto] = useState([]); // Inicialize como um array vazio

  const BuscaPokemon = (id:any) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '';
    return fetch(url).then(response => response.json());
  };

  useEffect(() => {
    async function fetchKantoPokemon() {
      const kantoPokemon = [];

      for (let i = 1; i <= 151; i++) {
        try {
          const pokemon = await BuscaPokemon(i);
          kantoPokemon.push(pokemon);
        } catch (error) {
          console.error('Erro ao buscar Pokémon:', error);
        }
      }

      setKanto(kantoPokemon);
    }

    fetchKantoPokemon();
  }, []);

  return (
    <>
      <div className="flex w-full h-screen mx-auto">
        <div className="flex flex-wrap p-5 w-11/12 mt-20 mx-auto">
          {kanto.map((e, index) => (
            <BoxPokemon key={index}  pokemon={e} />
          ))}
        </div>
      </div>
    </>
  );
}
