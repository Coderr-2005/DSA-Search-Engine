import { useState } from "react";

function useSolved() {
  const [solved, setSolved] = useState(() => {
    return JSON.parse(localStorage.getItem("solved")) || [];
  });

  const toggleSolved = (id) => {
    let updated;

    if (solved.includes(id)) {
      updated = solved.filter((item) => item !== id);
    } else {
      updated = [...solved, id];
    }

    setSolved(updated);
    localStorage.setItem("solved", JSON.stringify(updated));
  };

  const isSolved = (id) => solved.includes(id);

  return {
    solved,
    toggleSolved,
    isSolved,
  };
}

export default useSolved;
