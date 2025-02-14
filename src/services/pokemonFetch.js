export async function getPokemon() {
  const names = ["lokhlass", "luxray", "bulbizarre", "givrali"];

  const requests = names.map(async (name) => {
    const response = await fetch(`https://tyradex.app/api/v1/pokemon/${name}`);
    const data = await response.json();

    return {
      name: data.name.fr,
      image: data.sprites.regular,
      types: data.types.map((type) => ({
        name: type.name,
        image: type.image,
      })),
      stats: {
        hp: data.stats.hp,
        attack: data.stats.atk,
        defense: data.stats.def,
        speed: data.stats.vit,
      },
    };
  });
  const results = await Promise.all(requests);
  return results;
}
