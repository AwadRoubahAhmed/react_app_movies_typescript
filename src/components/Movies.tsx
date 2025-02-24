import { useEffect } from "react";
import Logo from "./Logo";
import { useFilter } from "../context/Context";
import MovieList from "./MovieList";
import Search from "./Search";

export default function Movies() {
  //State;
  const { movies, setMovies, searchValue, setSearchValue } = useFilter();

  //Comportement;

  useEffect(() => {
    const getApiMovies = async () => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5c7d750d`;
      const reponse = await fetch(url);
      const responseJson = await reponse.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };
    getApiMovies();
  }, [searchValue]);
  return (
    <div className="">
      <header className="w-full flex flex-wrap justify-around items-center text-xl bg-white shadow-md">
        <div>
          <Logo />
        </div>
        <div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </header>
      <div className="flex flex-wrap justify-around">
        {movies.map((movie) => {
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
