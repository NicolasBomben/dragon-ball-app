//obtener todos los personajes.
export const getCharacters = async (page =1 , limit = 10) => {
  const url = `https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`;
  const resp = await fetch(url);
  const data  = await resp.json();

  

  return {
    characters: data.items,
    meta: data.meta,
    links: data.links
  };
};
