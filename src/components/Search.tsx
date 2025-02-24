type SearchProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ searchValue, setSearchValue }: SearchProps) {
  return (
    <div>
      <form className="mb-3">
        <input
          type="text"
          placeholder="Search movies by name..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="border-2 bg-neutral-200 p-1 rounded-md capitalize"
        />
        <button className="text-2xl text-white bg-slate-900 hover:bg-slate-700 ml-3 p-1 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
}
