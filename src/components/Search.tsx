import React from "react";

type SearchProps = {
  SearchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Search: React.FC<SearchProps> = ({
  SearchValue,
  setSearchValue,
}) => {
  return (
    <div>
      <form className="mb-3">
        <input
          type="text"
          placeholder="Search movies by name..."
          value={SearchValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target.value)
          }
          className="input input-bordered w-full max-w-xs "
        />
        <button className="text-2xl text-white bg-slate-900 hover:bg-slate-700 ml-3 p-1 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};
