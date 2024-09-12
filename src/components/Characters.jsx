import { useState, useEffect } from "react";
import { getCharacters } from "../helpers/getCharacters";
import { CardCharacter } from "../components/CardCharacter";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getItems = async () => {
    const items = await getCharacters();
    setCharacters(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="text-blue">TODOS LOS PERSONAJES DE DRAGON BALL</div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character, index) => (
            <CardCharacter key={index} {...character} />
          ))}
        </div>
      </div>
    </>
  );
};
