import { getPokemon } from "./pokemonFetch";

function calculDamage(attaquant, defenseur) {
  let multiplicateur = Math.random();
  let damage = attaquant.attack * multiplicateur;
  damage = Math.trunc(damage);
  return damage;
}

class Pokemon {
  constructor(data) {
    this.name = data[0].name;
    this.hp = data[0].stats.hp;
    this.attack = data[0].stats.attack;
    this.defense = data[0].stats.defense;
    this.speed = data[0].stats.speed;
    this.primaryType = data[0].types[0].name;
    this.secondaryType = data[0].types[1] ? data[0].types[1].name : null;
  }

  useAttack(defenseur) {
    const degats = calculDamage(this, defenseur);
    defenseur.hp -= degats;
  }
}

export function createPokemon(data) {
  const pokemon = new Pokemon(data);
  return pokemon;
}
