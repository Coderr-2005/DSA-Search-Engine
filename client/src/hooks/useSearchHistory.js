import { useEffect, useState } from "react";

function useSearchHistory() {
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("searchHistory")) || [];
  });

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  function addSearch(text) {
    if (!text.trim()) return;

    setHistory((prev) => {
      const updated = [text, ...prev.filter((item) => item !== text)];
      return updated.slice(0, 5);
    });
  }

  return { history, addSearch };
}

export default useSearchHistory;
