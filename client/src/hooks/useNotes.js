import { useEffect, useState } from "react";

function useNotes() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("algorithmNotes")) || {};
  });

  useEffect(() => {
    localStorage.setItem("algorithmNotes", JSON.stringify(notes));
  }, [notes]);

  function saveNote(id, note) {
    setNotes((prev) => ({
      ...prev,
      [id]: note,
    }));
  }

  function getNote(id) {
    return notes[id] || "";
  }

  return { saveNote, getNote };
}

export default useNotes;
