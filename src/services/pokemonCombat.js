import { getPokemon } from "./pokemonFetch";

function setStatistic(pokemon) {
  const health = pokemon.stats.hp;
  const defense = pokemon.stats.def;
  const attack = pokemon.stats.attack;
}

function pokemonAttack(attacker, defender) {
  const damage = attacker.stats.attack * Math.random();
  const newHealth = defender.stats.hp - damage;
}
