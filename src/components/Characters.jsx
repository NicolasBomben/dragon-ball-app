import { useState, useEffect } from "react";
import { getCharacters } from "../helpers/getCharacters";
import { CardCharacter } from "../components/CardCharacter";

import { ChevronLeft, ChevronRight } from "lucide-react";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [links, setLinks] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters(page);
      setCharacters(data.characters);
      setTotalPages(data.meta.totalPages);
      setLinks(data.links);
    };

    fetchCharacters();
  }, [page]);

  //funcion para ir a la pagina siguiente.
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  //funcion para ir a la pagina anterior
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-2 py-4">
        <button
          onClick={handlePrevPage}
          disabled={!links.previous || page === 1}
          className="bg-[#34aee3] inline-flex items-center justify-center rounded-md text-lg font-medium  transition-colors focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          
        >
          <ChevronLeft className="h-4 w-4 mr-2"/>
          Previous
        </button>
        <span className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={!links.next || page === totalPages}
          className="bg-[#34aee3] inline-flex items-center justify-center rounded-md text-lg font-medium  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2"/>
        </button>
      </div>
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character, index) => (
            <CardCharacter key={index} {...character} />
          ))}
        </div>
      </div>
    </>
  );
};
