function DifficultyProgress() {
  const stats = [
    {
      name: "Easy",
      solved: 42,
      color: "bg-green-500",
    },
    {
      name: "Medium",
      solved: 28,
      color: "bg-yellow-500",
    },
    {
      name: "Hard",
      solved: 9,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">Difficulty Progress</h2>

      <div className="space-y-4">
        {stats.map((item) => (
          <div key={item.name} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${item.color}`} />

              <span>{item.name}</span>
            </div>

            <span className="font-bold">{item.solved}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DifficultyProgress;
