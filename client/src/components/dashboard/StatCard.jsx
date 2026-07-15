function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className={`text-4xl font-bold mt-2 ${color}`}>{value}</h2>
        </div>

        <div className="text-5xl">{icon}</div>
      </div>
    </div>
  );
}

export default StatCard;
