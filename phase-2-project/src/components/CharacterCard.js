import { useState } from "react";

function CharacterCard({ character }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite(true);
    // ToDo: add character to favorite list
   
  };

  return (
    <article>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <button onClick={handleAddToFavorites} disabled={isFavorite}>
        {isFavorite ? "Added to Favorites" : "Add to Favorites"}
      </button>
    </article>
  );
}

export default CharacterCard;
