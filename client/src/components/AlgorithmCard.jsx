import FavoriteButton from "./FavoriteButton";
<FavoriteButton />;
function AlgorithmCard({
  name,
  difficulty,
  topic,
  description,
  time,
  space,
  onView,
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">{name}</h2>

        <span
          className={`px-3 py-1 rounded-full text-sm text-white ${
            difficulty === "Easy"
              ? "bg-green-600"
              : difficulty === "Medium"
                ? "bg-yellow-500"
                : "bg-red-600"
          }`}
        >
          {difficulty}
        </span>
      </div>

      <p className="text-gray-400 mt-3">{description}</p>

      <div className="mt-5 text-white space-y-2">
        <p>📂 {topic}</p>

        <p>⏱ {time}</p>

        <p>💾 {space}</p>
      </div>

      <button
        onClick={onView}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white"
      >
        View Details
      </button>
    </div>
  );
}

export default AlgorithmCard;
