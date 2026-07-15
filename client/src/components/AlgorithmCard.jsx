import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FavoriteButton from "./FavoriteButton";

import useNotes from "../hooks/useNotes";
import useRatings from "../hooks/useRatings";
import useConfidence from "../hooks/useConfidence";

function AlgorithmCard({
  id,
  name,
  difficulty,
  topic,
  description,
  companies,
  time,
  space,
  isFavorite,
  toggleFavorite,
  isSolved,
  toggleSolved,
}) {
  const navigate = useNavigate();

  const { saveNote, getNote } = useNotes();
  const { setRating, getRating } = useRatings();
  const { update, get } = useConfidence();

  const [note, setNote] = useState(getNote(id));

  const rating = getRating(id);
  const confidence = get(id);

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-white">{name}</h2>

          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm text-white ${
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

        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => toggleFavorite(id)}
        />
      </div>

      <p className="text-gray-400 mt-4">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {companies?.map((company) => (
          <span
            key={company}
            className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full"
          >
            {company}
          </span>
        ))}
      </div>

      <div className="mt-5 text-white space-y-2">
        <p>📂 {topic}</p>
        <p>⏱ {time}</p>
        <p>💾 {space}</p>
      </div>

      <div className="flex gap-1 mt-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(id, star)}
            className="text-2xl"
          >
            {star <= rating ? "⭐" : "☆"}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-white mb-2">Confidence: {confidence}%</p>

        <input
          type="range"
          min="0"
          max="100"
          value={confidence}
          onChange={(e) => update(id, Number(e.target.value))}
          className="w-full"
        />
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onBlur={() => saveNote(id, note)}
        placeholder="Your Notes..."
        className="w-full mt-5 p-3 rounded-lg bg-slate-700 text-white"
      />

      <button
        onClick={() => toggleSolved(id)}
        className={`mt-5 w-full py-2 rounded-lg text-white transition ${
          isSolved
            ? "bg-green-600 hover:bg-green-700"
            : "bg-slate-600 hover:bg-slate-700"
        }`}
      >
        {isSolved ? "✅ Solved" : "Mark as Solved"}
      </button>

      <button
        onClick={() => navigate(`/algorithm/${id}`)}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white"
      >
        View Details
      </button>
    </div>
  );
}

export default AlgorithmCard;
