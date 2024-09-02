
"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css"; // Adjust the path if necessary

export default function Page() {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('ไม่พบข้อมูลโปเกม่อน:', error);
      }
    };

    fetchPokemonData();
  }, [name]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{pokemon.name}
        <img
        className={styles.cardImgTop}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      </h1>
      <div className={styles.stats}>
        <strong>Stats</strong>
        <p className={styles.hp}>HP: {pokemon.stats.find((stat: any) => stat.stat.name === 'hp')?.base_stat}</p>
        <p className={styles.attack}>Attack: {pokemon.stats.find((stat: any) => stat.stat.name === 'attack')?.base_stat}</p>
        <p className={styles.defense}>Defense: {pokemon.stats.find((stat: any) => stat.stat.name === 'defense')?.base_stat}</p>
        <p className={styles.specialdef}>Special Defense: {pokemon.stats.find((stat: any) => stat.stat.name === 'special-defense')?.base_stat}</p>
        <p className={styles.specialatt}>Special Attack: {pokemon.stats.find((stat: any) => stat.stat.name === 'special-attack')?.base_stat}</p>
        <p className={styles.speed}>Speed: {pokemon.stats.find((stat: any) => stat.stat.name === 'speed')?.base_stat}</p>
        <p className={styles.height}>Height: {pokemon.height / 10} m</p>
        <p className={styles.weight}>Weight: {pokemon.weight / 10} kg</p>
      </div>
      
      <div className={styles.abilities}>
        <strong>Abilities:</strong>
        {pokemon.abilities.map((a: any) => (
          <div key={a.ability.name} className={styles.abilityItem}>
            {a.ability.name}
          </div>
        ))}
      </div>
    </div>
  );
}
