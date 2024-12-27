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
      <form className="flex items-center mb-3">
        <input
          type="text"
          placeholder="Search movies by name..."
          value={SearchValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target.value)
          }
          className="input input-bordered w-full max-w-xs text-xl capitalize"
        />
        <button className="btn btn-primary btn-outline text-xl text-white mx-2 ">
          Search
        </button>
      </form>
    </div>
  );
};
