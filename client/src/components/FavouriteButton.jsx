import { useState } from "react";

function FavoriteButton() {
  const [fav, setFav] = useState(false);

  return (
    <button onClick={() => setFav(!fav)} className="text-3xl">
      {fav ? "❤️" : "🤍"}
    </button>
  );
}

export default FavoriteButton;
