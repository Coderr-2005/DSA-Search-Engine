import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import useAlgorithms from "../hooks/useAlgorithms";

function AlgorithmPage() {
  const { id } = useParams();

  const { data: algorithms = [], isLoading, isError } = useAlgorithms();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-500 text-3xl">
        Failed to load algorithm.
      </div>
    );
  }

  const algorithm = algorithms.find((algo) => String(algo.id) === String(id));

  if (!algorithm) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <div className="flex items-center justify-center h-[80vh]">
          <h1 className="text-white text-4xl font-bold">Algorithm Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-6">{algorithm.name}</h1>

        <span
          className={`inline-block mt-5 px-4 py-2 rounded-full ${
            algorithm.difficulty === "Easy"
              ? "bg-green-600"
              : algorithm.difficulty === "Medium"
                ? "bg-yellow-500"
                : "bg-red-600"
          }`}
        >
          {algorithm.difficulty}
        </span>

        <p className="text-xl text-gray-300 mt-8">{algorithm.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Time Complexity</h2>

            <p className="text-lg">{algorithm.time}</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Space Complexity</h2>

            <p className="text-lg">{algorithm.space}</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-8 mt-10">
          <h2 className="text-2xl font-bold mb-4">Companies</h2>

          <div className="flex flex-wrap gap-3">
            {algorithm.companies.map((company) => (
              <span
                key={company}
                className="bg-indigo-600 px-4 py-2 rounded-full"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-8 mt-10">
          <h2 className="text-2xl font-bold mb-4">Topic</h2>

          <p className="text-lg">{algorithm.topic}</p>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmPage;
