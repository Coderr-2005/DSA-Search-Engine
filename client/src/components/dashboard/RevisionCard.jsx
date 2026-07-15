function RevisionCard() {
  const revisions = [
    {
      topic: "Binary Search",
      priority: "High",
    },
    {
      topic: "DFS",
      priority: "Medium",
    },
    {
      topic: "BFS",
      priority: "Medium",
    },
    {
      topic: "Heap",
      priority: "Low",
    },
    {
      topic: "Dynamic Programming",
      priority: "High",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Revision Queue</h2>

        <span className="text-sm text-gray-500">{revisions.length} Topics</span>
      </div>

      <div className="space-y-4">
        {revisions.map((item) => (
          <div
            key={item.topic}
            className="flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <div>
              <h3 className="font-semibold">{item.topic}</h3>

              <p className="text-sm text-gray-500">Recommended for revision</p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriorityColor(
                item.priority,
              )}`}
            >
              {item.priority}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
        Start Revision
      </button>
    </div>
  );
}

export default RevisionCard;
