import { useEffect, useState } from "react";

function useStreak() {
  const [streak, setStreak] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("streak")) || {
        count: 0,
        lastVisit: null,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("streak", JSON.stringify(streak));
  }, [streak]);

  useEffect(() => {
    const today = new Date().toDateString();

    if (streak.lastVisit === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (streak.lastVisit === yesterday.toDateString()) {
      setStreak({
        count: streak.count + 1,
        lastVisit: today,
      });
    } else {
      setStreak({
        count: 1,
        lastVisit: today,
      });
    }
  }, []);

  return streak.count;
}

export default useStreak;
