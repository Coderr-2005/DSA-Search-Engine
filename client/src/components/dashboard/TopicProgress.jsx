function TopicProgress() {
  const topics = [
    ["Arrays", 90],
    ["Strings", 75],
    ["Binary Search", 82],
    ["Trees", 65],
    ["Graphs", 25],
    ["Dynamic Programming", 12],
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Topic Mastery</h2>

      <div className="space-y-5">
        {topics.map(([name, value]) => (
          <div key={name}>
            <div className="flex justify-between mb-2">
              <span>{name}</span>

              <span>{value}%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{
                  width: `${value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicProgress;
