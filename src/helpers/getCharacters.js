//obtener todos los personajes.
export const getCharacters = async () => {
  const url = "https://dragonball-api.com/api/characters";
  const resp = await fetch(url);
  const data  = await resp.json();

  

  return data.items;
};
