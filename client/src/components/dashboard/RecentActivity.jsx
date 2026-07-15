function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">Recent Activity</h2>

      <div className="space-y-4">
        <div className="border-l-4 border-green-500 pl-4">
          <p className="font-semibold">No recent activity</p>

          <p className="text-sm text-gray-500">Start solving algorithms.</p>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
