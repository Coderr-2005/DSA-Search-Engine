import { calculateLevel } from "../../utils/levelSystem";

function LevelCard({ xp }) {
  const level = calculateLevel(xp);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">Level Progress</h2>

      <h1 className="text-6xl font-bold text-blue-600">{level.level}</h1>

      <p className="text-gray-500 mt-2">{xp} XP</p>

      <div className="mt-6 w-full bg-gray-200 h-4 rounded-full">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{
            width: `${level.progress}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-gray-500">
        {level.nextLevelXP - xp} XP until Level {level.level + 1}
      </p>
    </div>
  );
}

export default LevelCard;
