import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-5xl font-bold text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1 className="text-4xl font-bold text-white">{user?.name}</h1>

              <p className="text-gray-400 mt-3">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-gray-400">XP</h2>

            <h1 className="text-5xl text-white font-bold mt-4">
              {user?.xp ?? 0}
            </h1>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-gray-400">Streak</h2>

            <h1 className="text-5xl text-white font-bold mt-4">
              {user?.streak ?? 0}
            </h1>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-gray-400">Account</h2>

            <h1 className="text-3xl text-green-400 font-bold mt-5">Active</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
