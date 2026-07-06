function DifficultyFilter({ difficulty, setDifficulty }) {
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="flex justify-center gap-4 mt-8">
      {difficulties.map((level) => (
        <button
          key={level}
          onClick={() => setDifficulty(level)}
          className={`px-5 py-2 rounded-lg
            ${
              difficulty === level
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-gray-300"
            }`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}

export default DifficultyFilter;
