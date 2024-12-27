import React from "react";
import { MovieListProps } from "./typescript/MoviesType";

export const MovieList: React.FC<MovieListProps> = ({
  Poster,
  Title,
  Year,
}) => {
  return (
    <div>
      <div className="flex-auto my-6 mx-1.5 shadow-2xl bg-neutral-300 rounded-xl">
        <img
          src={Poster}
          alt={Title}
          className="w-96 h-80 cursor-pointer rounded-xl hover:translate-y-0.5 my-1"
        />
        <div className="">
          <div className="flex justify-between px-3 font-mono">
            <h3 className="w-64 text-xl text-gray-500 underline font-semibold cursor-pointer my-3">
              Name: <span className="text-gray-700 font-bold">{Title}</span>
            </h3>
            <h4 className="text-gray-700 font-semibold my-3">
              Year: <span className="text-neutral-500">{Year}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
