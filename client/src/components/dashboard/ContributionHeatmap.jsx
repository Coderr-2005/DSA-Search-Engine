function ContributionHeatmap() {
  const days = Array.from({ length: 140 }, () => Math.floor(Math.random() * 5));

  const colors = [
    "bg-gray-200",
    "bg-green-200",
    "bg-green-300",
    "bg-green-500",
    "bg-green-700",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Contribution Heatmap</h2>

      <div className="grid grid-cols-20 gap-1 justify-center">
        {days.map((value, index) => (
          <div key={index} className={`w-4 h-4 rounded ${colors[value]}`} />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">
        <span>Less</span>

        {colors.map((color, index) => (
          <div key={index} className={`w-4 h-4 rounded ${color}`} />
        ))}

        <span>More</span>
      </div>

      <p className="mt-5 text-gray-500">
        This graph will eventually visualize your daily algorithm-solving
        activity, similar to GitHub's contribution graph.
      </p>
    </div>
  );
}

export default ContributionHeatmap;
