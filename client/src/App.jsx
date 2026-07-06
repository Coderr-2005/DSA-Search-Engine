import AlgorithmModal from "./components/AlgorithmModal";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import DifficultyFilter from "./components/DifficultyFilter";
import TopicFilter from "./components/TopicFilter";
import AlgorithmCard from "./components/AlgorithmCard";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All");

  const [algorithms, setAlgorithms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/algorithms")
      .then((res) => setAlgorithms(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredAlgorithms = algorithms.filter((algorithm) => {
    const matchesSearch =
      algorithm.name.toLowerCase().includes(search.toLowerCase()) ||
      algorithm.topic.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || algorithm.difficulty === difficulty;

    const matchesTopic = topic === "All" || algorithm.topic === topic;

    return matchesSearch && matchesDifficulty && matchesTopic;
  });
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <Hero />

      <SearchBar search={search} setSearch={setSearch} />

      <DifficultyFilter difficulty={difficulty} setDifficulty={setDifficulty} />

      <TopicFilter topic={topic} setTopic={setTopic} />

      {filteredAlgorithms.length === 0 ? (
        <div className="text-center text-white mt-16">
          <h2 className="text-3xl font-bold">No Algorithms Found 😕</h2>

          <p className="text-gray-400 mt-3">Try another search or filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {filteredAlgorithms.map((algorithm) => (
            <AlgorithmCard
              key={algorithm.id}
              name={algorithm.name}
              difficulty={algorithm.difficulty}
              topic={algorithm.topic}
              description={algorithm.description}
              time={algorithm.time}
              space={algorithm.space}
              onView={() => setSelectedAlgorithm(algorithm)}
            />
          ))}
        </div>
      )}
      <AlgorithmModal
        algorithm={selectedAlgorithm}
        onClose={() => setSelectedAlgorithm(null)}
      />
    </div>
  );
}
export default App;
