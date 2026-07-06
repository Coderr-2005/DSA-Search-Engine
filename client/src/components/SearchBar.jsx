function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        placeholder="Search Algorithms..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-2/3 p-4 rounded-lg border border-gray-600 bg-slate-800 text-white"
      />
    </div>
  );
}

export default SearchBar;
