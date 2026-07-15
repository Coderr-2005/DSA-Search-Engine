import { useEffect, useState } from "react";

function useRecentlyViewed() {
  const [recent, setRecent] = useState(() => {
    const saved = localStorage.getItem("recentAlgorithms");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("recentAlgorithms", JSON.stringify(recent));
  }, [recent]);

  function addRecent(id) {
    setRecent((prev) => {
      const updated = [id, ...prev.filter((item) => item !== id)];
      return updated.slice(0, 5);
    });
  }

  return { recent, addRecent };
}

export default useRecentlyViewed;
