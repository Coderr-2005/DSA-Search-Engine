import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        AlgoAtlas
      </Link>

      <div className="flex gap-5 items-center">
        <Link to="/">Home</Link>

        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/profile">Profile</Link>
          </>
        )}

        {!user ? (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={logout} className="bg-red-600 px-4 py-2 rounded-lg">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
