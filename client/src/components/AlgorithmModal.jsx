import { useState } from "react";

function AlgorithmModal({ algorithm, onClose }) {
  const [language, setLanguage] = useState("cpp");

  if (!algorithm) return null;

  const copyCode = () => {
    navigator.clipboard.writeText(algorithm[language]);

    alert("Code copied!");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-slate-900 w-[90%] max-w-5xl rounded-xl p-8 text-white">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">{algorithm.name}</h1>

          <button onClick={onClose} className="text-red-500 text-3xl">
            ×
          </button>
        </div>

        <p className="mt-5">{algorithm.description}</p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => setLanguage("cpp")}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            C++
          </button>

          <button
            onClick={() => setLanguage("java")}
            className="bg-green-600 px-4 py-2 rounded"
          >
            Java
          </button>

          <button
            onClick={() => setLanguage("python")}
            className="bg-yellow-600 px-4 py-2 rounded"
          >
            Python
          </button>
        </div>

        <pre className="bg-black mt-6 p-5 rounded overflow-auto">
          <code>{algorithm[language]}</code>
        </pre>

        <button
          onClick={copyCode}
          className="mt-5 bg-blue-600 px-5 py-2 rounded"
        >
          Copy Code
        </button>
      </div>
    </div>
  );
}

export default AlgorithmModal;
