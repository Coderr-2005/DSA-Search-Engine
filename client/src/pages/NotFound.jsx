import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-white">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="text-2xl mt-5">Page Not Found</p>

      <Link
        to="/"
        className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
