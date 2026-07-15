function CompanyFilter({ company, setCompany }) {
  const companies = [
    "All",
    "Google",
    "Amazon",
    "Microsoft",
    "Meta",
    "Adobe",
    "Uber",
    "Atlassian",
  ];

  return (
    <div className="flex justify-center gap-3 mt-6 flex-wrap">
      {companies.map((item) => (
        <button
          key={item}
          onClick={() => setCompany(item)}
          className={`px-4 py-2 rounded-lg transition ${
            company === item
              ? "bg-purple-600 text-white"
              : "bg-slate-700 text-gray-300 hover:bg-slate-600"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CompanyFilter;
