function GoalCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Today's Goal</h2>

      <div className="mb-3 flex justify-between">
        <span>Solve 5 Problems</span>

        <span className="font-semibold">0 / 5</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: "0%" }}
        />
      </div>

      <p className="mt-4 text-gray-500">
        Complete today's goal to earn bonus XP.
      </p>
    </div>
  );
}

export default GoalCard;
