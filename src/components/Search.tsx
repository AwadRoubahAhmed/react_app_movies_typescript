export default function Search({ SearchValue, setSearchVlaue }) {
  return (
    <div>
      <form className="mb-3">
        <input
          type="text"
          placeholder="Search movies by name..."
          value={SearchValue}
          onChange={(event) => setSearchVlaue(event.target.value)}
          className="border-2 bg-neutral-200 p-1 rounded-md capitalize"
        />
        <button className="text-2xl text-white bg-slate-900 hover:bg-slate-700 ml-3 p-1 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
}
