import { useEffect, useState } from "react";

function useConfidence() {
  const [confidence, setConfidence] = useState(() => {
    return JSON.parse(localStorage.getItem("confidence")) || {};
  });

  useEffect(() => {
    localStorage.setItem("confidence", JSON.stringify(confidence));
  }, [confidence]);

  function update(id, value) {
    setConfidence((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function get(id) {
    return confidence[id] || 50;
  }

  return { update, get };
}

export default useConfidence;
