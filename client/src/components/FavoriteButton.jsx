function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button onClick={onClick} className="transition-transform hover:scale-110">
      {isFavorite ? (
        <span className="text-2xl text-red-500">❤️</span>
      ) : (
        <span className="text-2xl text-gray-400">🤍</span>
      )}
    </button>
  );
}

export default FavoriteButton;
