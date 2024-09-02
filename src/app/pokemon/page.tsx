"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css"; // Adjust the path if necessary

interface PokemonList {
  count: number;
  next: string | null;
  previous?: string | null;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

export default function Page() {
  const [pokemonData, setPokemonData] = React.useState<PokemonList>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const [currentPageUrl, setCurrentPageUrl] = React.useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const getData = async () => {
    try {
      const result = await fetch(currentPageUrl);
      const res = await result.json();
      setPokemonData((prevData) => ({
        ...res,
        results: [...prevData.results, ...res.results],
      }));
      setCurrentPageUrl(res.next); // Update the URL for the next page
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const DisplayPokemonList = () => {
    if (pokemonData && pokemonData.results.length > 0) {
      return (
        <ul className={styles.pokemonList}>
          {pokemonData.results.map((p, index) => (
            <li key={index} className={styles.pokemonItem}>
              <img
                className={styles.cardImgTop}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={p.name}
              />
              <Link href={`/pokemon/${p.name}`} className={styles.pokemonLink}>
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="Pokémon Logo"
      />
      <DisplayPokemonList />
      {pokemonData.next && (
        <button className={styles.loadMoreButton} onClick={getData}>
          Load More
        </button>
      )}
    </div>
  );
}