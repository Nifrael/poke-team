import { getPokemon } from "./pokemonFetch";

function calculDamage(attaquant) {
  let multiplicateur = Math.random();
  let damage = attaquant.attack * multiplicateur;
  damage = Math.trunc(damage);
  return `${attaquant.name} inflige ${damage} points de dégats.`;
}

function calculDefense(defenseur) {
  let bonus = defenseur.defense / 5;
  bonus = Math.trunc(bonus);
  return `${defenseur.name} résiste de ${bonus} points de défense.`;
}

export function useAttack(attaquant, defenseur) {
  const degats = calculDamage(attaquant);
  const health = calculDefense(defenseur);
  defenseur.hp = degats + health;
  return `Il reste ${defenseur.hp} points de vie à ${defenseur.name}.`;
}

class Pokemon {
  constructor(data) {
    this.name = data[0].name;
    this.hp = data[0].stats.hp;
    this.attack = data[0].stats.attack;
    this.defense = data[0].stats.defense;
    this.speed = data[0].stats.speed;
    this.image = data[0].image;
    this.primaryType = data[0].types[0].name;
    this.secondaryType = data[0].types[1] ? data[0].types[1].name : null;
  }
}

export function createPokemon(data) {
  const pokemon = new Pokemon(data);
  return pokemon;
}
