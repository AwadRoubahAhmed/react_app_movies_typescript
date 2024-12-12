import { MovieListProps } from "./typescript/MoviesType";

export default function MovieList({ Poster, Title, Year }: MovieListProps) {
  return (
    <div>
      <div className="flex-auto my-6 mx-1.5 shadow-lg bg-neutral-300 rounded-xl">
        <img
          src={Poster}
          alt=""
          className="w-96 h-80 cursor-pointer rounded-xl hover:translate-y-1 my-2"
        />
        <div className="">
          <div className="flex justify-between px-3 font-sans">
            <h3 className="w-64 text-xl font-bold underline cursor-pointer my-3">
              Name: <span className="text-gray-700">{Title}</span>
            </h3>
            <h4 className="font-semibold my-3">
              Year: <span>{Year}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
