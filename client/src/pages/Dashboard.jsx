import StatCard from "../components/dashboard/StatCard";
import GoalCard from "../components/dashboard/GoalCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import LevelCard from "../components/dashboard/LevelCard";
import TopicProgress from "../components/dashboard/TopicProgress";
import DifficultyProgress from "../components/dashboard/DifficultyProgress";
import ContributionHeatmap from "../components/dashboard/ContributionHeatmap";
import RevisionCard from "../components/dashboard/RevisionCard";

import useUser from "../hooks/useUser";

function Dashboard() {
  const {
    profile,
    stats,
    difficulty,
    solvedProblems,
    favoriteProblems,
    isLoading,
  } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10">
          Welcome back, {profile?.name} 👋
        </h1>

        <div className="grid lg:grid-cols-4 gap-6">
          <StatCard
            title="XP"
            value={stats?.xp || 0}
            icon="⭐"
            color="text-blue-600"
          />

          <StatCard
            title="Current Streak"
            value={stats?.streak || 0}
            icon="🔥"
            color="text-orange-500"
          />

          <StatCard
            title="Solved"
            value={stats?.solved || 0}
            icon="✅"
            color="text-green-600"
          />

          <LevelCard xp={stats?.xp || 0} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <GoalCard />

          <RecentActivity />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <TopicProgress solvedProblems={solvedProblems} />

          <DifficultyProgress difficulty={difficulty} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <ContributionHeatmap />

          <RevisionCard />
        </div>

        <div className="mt-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-5">Favorite Problems</h2>

          {favoriteProblems.length === 0 ? (
            <p className="text-gray-500">No favorite problems yet.</p>
          ) : (
            <div className="space-y-3">
              {favoriteProblems.map((problem) => (
                <div key={problem._id} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{problem.name}</h3>

                  <p className="text-gray-500">{problem.difficulty}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
