import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import DifficultyFilter from "../components/DifficultyFilter";
import TopicFilter from "../components/TopicFilter";
import CompanyFilter from "../components/CompanyFilter";
import AlgorithmCard from "../components/AlgorithmCard";
import StatsCard from "../components/StatsCard";
import DifficultyChart from "../components/DifficultyChart";

import useAlgorithms from "../hooks/useAlgorithms";
import useFavorites from "../hooks/useFavorites";
import useSolved from "../hooks/useSolved";
import useSearchHistory from "../hooks/useSearchHistory";
import useStreak from "../hooks/useStreak";

function Home() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All");
  const [company, setCompany] = useState("All");
  const [showFavorites, setShowFavorites] = useState(false);

  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { solved, toggleSolved, isSolved } = useSolved();
  const { history, addSearch } = useSearchHistory();
  const streak = useStreak();

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
        Failed to load algorithms.
      </div>
    );
  }

  const progress =
    algorithms.length === 0
      ? 0
      : Math.round((solved.length / algorithms.length) * 100);

  const easySolved = algorithms.filter(
    (a) => a.difficulty === "Easy" && solved.includes(a.id),
  ).length;

  const mediumSolved = algorithms.filter(
    (a) => a.difficulty === "Medium" && solved.includes(a.id),
  ).length;

  const hardSolved = algorithms.filter(
    (a) => a.difficulty === "Hard" && solved.includes(a.id),
  ).length;

  const clearFilters = () => {
    setSearch("");
    setDifficulty("All");
    setTopic("All");
    setCompany("All");
    setShowFavorites(false);
  };
  const filteredAlgorithms = algorithms.filter((algorithm) => {
    const matchesSearch =
      algorithm.name.toLowerCase().includes(search.toLowerCase()) ||
      algorithm.topic.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || algorithm.difficulty === difficulty;

    const matchesTopic = topic === "All" || algorithm.topic === topic;

    const matchesCompany =
      company === "All" || algorithm.companies.includes(company);

    const matchesFavorite = !showFavorites || favorites.includes(algorithm.id);

    return (
      matchesSearch &&
      matchesDifficulty &&
      matchesTopic &&
      matchesCompany &&
      matchesFavorite
    );
  });

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      {/* Progress */}
      <div className="px-10 mt-8">
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex justify-between text-white mb-3">
            <span className="font-semibold">DSA Progress</span>

            <span>
              {solved.length} / {algorithms.length} Solved
            </span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-gray-300 mt-3">{progress}% Completed</p>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6 px-10 mt-8">
        <StatsCard
          title="Algorithms"
          value={algorithms.length}
          color="bg-blue-600"
        />

        <StatsCard title="Solved" value={solved.length} color="bg-green-600" />

        <StatsCard
          title="Favorites"
          value={favorites.length}
          color="bg-pink-600"
        />

        <StatsCard
          title="Progress"
          value={`${progress}%`}
          color="bg-purple-600"
        />

        <StatsCard title="Easy" value={easySolved} color="bg-emerald-600" />

        <StatsCard
          title="Medium + Hard"
          value={mediumSolved + hardSolved}
          color="bg-orange-600"
        />
      </div>
      {/* Chart */}
      <div className="flex justify-center mt-10">
        <DifficultyChart
          easy={easySolved}
          medium={mediumSolved}
          hard={hardSolved}
        />
      </div>
      {/* Streak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 mt-8">
        <div className="bg-orange-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold">🔥 Current Streak</h2>

          <p className="text-4xl mt-3">{streak} Days</p>
        </div>

        <div className="bg-cyan-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold">🎯 Daily Goal</h2>

          <p className="text-4xl mt-3">{Math.min(solved.length, 5)}/5</p>

          <p className="mt-2">Solve 5 algorithms today</p>
        </div>
      </div>
      {/* Search */}
      <SearchBar
        search={search}
        setSearch={(value) => {
          setSearch(value);
          addSearch(value);
        }}
      />
      {/* Recent Searches */}
      <div className="px-10 mt-4">
        <h3 className="text-white font-semibold mb-2">Recent Searches</h3>

        <div className="flex flex-wrap gap-2">
          {history.map((item) => (
            <button
              key={item}
              onClick={() => setSearch(item)}
              className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* Filters */}
      <DifficultyFilter difficulty={difficulty} setDifficulty={setDifficulty} />
      <TopicFilter topic={topic} setTopic={setTopic} />
      <CompanyFilter company={company} setCompany={setCompany} />
      <div className="px-10 mt-4 flex flex-wrap gap-4 items-center">
        <button
          onClick={clearFilters}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Clear All Filters
        </button>

        <label className="flex items-center gap-3 text-white cursor-pointer">
          <input
            type="checkbox"
            checked={showFavorites}
            onChange={() => setShowFavorites(!showFavorites)}
            className="w-5 h-5"
          />
          Show Favorites Only
        </label>
      </div>
      {/* Results */}
      <div className="px-10 mt-6 text-gray-300">
        Showing{" "}
        <span className="font-bold text-white">
          {filteredAlgorithms.length}
        </span>{" "}
        of <span className="font-bold text-white">{algorithms.length}</span>{" "}
        algorithms
      </div>{" "}
      {/* Algorithm Grid */}
      {filteredAlgorithms.length === 0 ? (
        <div className="text-center text-white mt-16">
          <h2 className="text-3xl font-bold">No Algorithms Found</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 p-10">
          {filteredAlgorithms.map((algorithm) => (
            <AlgorithmCard
              key={algorithm.id}
              id={algorithm.id}
              name={algorithm.name}
              difficulty={algorithm.difficulty}
              topic={algorithm.topic}
              description={algorithm.description}
              companies={algorithm.companies}
              time={algorithm.time}
              space={algorithm.space}
              isFavorite={isFavorite(algorithm.id)}
              toggleFavorite={toggleFavorite}
              isSolved={isSolved(algorithm.id)}
              toggleSolved={toggleSolved}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
