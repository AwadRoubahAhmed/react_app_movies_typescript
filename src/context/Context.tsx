"use client";
// Imports
import { createContext, useContext, useState } from "react";
import { MovieListProps } from "../typescript/MoviesType";

// Types;
export type ContextPropsType = {
  movies: MovieListProps[];
  setMovies: (value: React.SetStateAction<MovieListProps[]>) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

//////////////////////////// 1 ///////////////////////
// 1. Création du Context;
export const Context = createContext<ContextPropsType>({
  movies: [],
  setMovies: () => {},
  searchValue: "",
  setSearchValue: () => {},
});

//////////////////////////// 2 ////////////////////////
// 2. Installation du Context;

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // States
  const [movies, setMovies] = useState<MovieListProps[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <Context.Provider
      value={{
        movies,
        setMovies,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

//////////////////////////// 3 ////////////////////////
// 3. Consommation du Context;
export const useFilter = () => {
  const filterContext = useContext(Context);
  return filterContext;
};
