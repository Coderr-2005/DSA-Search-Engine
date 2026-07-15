import { useEffect, useState } from "react";

function useRatings() {
  const [ratings, setRatings] = useState(() => {
    return JSON.parse(localStorage.getItem("ratings")) || {};
  });

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  function setRating(id, rating) {
    setRatings((prev) => ({
      ...prev,
      [id]: rating,
    }));
  }

  function getRating(id) {
    return ratings[id] || 0;
  }

  return { setRating, getRating };
}

export default useRatings;
