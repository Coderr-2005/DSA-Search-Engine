function TopicFilter({ topic, setTopic }) {
  const topics = ["All", "Searching", "Sorting", "Graphs", "Arrays"];

  return (
    <div className="flex justify-center gap-4 mt-6 flex-wrap">
      {topics.map((item) => (
        <button
          key={item}
          onClick={() => setTopic(item)}
          className={`px-5 py-2 rounded-lg transition ${
            topic === item
              ? "bg-green-600 text-white"
              : "bg-slate-700 text-gray-300 hover:bg-slate-600"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default TopicFilter;
