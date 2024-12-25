import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Search } from "./Search";
import { MovieList } from "./MovieList";

export default function Movies() {
  //State;
  const [Movies, setMovies] = useState([]);
  const [SearchValue, setSearchValue] = useState("");

  //Comportement;

  useEffect(() => {
    const getApiMovies = async () => {
      const url = `http://www.omdbapi.com/?s=${SearchValue}&apikey=5c7d750d`;
      const reponse = await fetch(url);
      const responseJson = await reponse.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };
    getApiMovies();
  }, [SearchValue]);
  return (
    <div className="">
      <header className="w-full flex flex-wrap justify-around items-center text-xl bg-white shadow-md">
        <div>
          <Logo />
        </div>
        <div>
          <Search SearchValue={SearchValue} setSearchValue={setSearchValue} />
        </div>
      </header>
      <div className="flex flex-wrap justify-around">
        {Movies.map((movie) => {
          return (
            <div>
              <MovieList
                Poster={movie.Poster}
                Title={movie.Title}
                Year={movie.Year}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
