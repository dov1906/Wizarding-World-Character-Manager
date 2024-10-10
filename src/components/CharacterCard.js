import { useEffect, useState } from "react";
import redWizard from "../data/red-wizard.png";
import greenWizard from "../data/green-wizard.png";
import blueWizard from "../data/blue-wizard.png";
import yellowWizard from "../data/yellow-wizard.png";
import unknownWizard from "../data/unknown-wizard.png"



// Define default images for each house
const defaultHouseImages = {
  Gryffindor: redWizard,
  Slytherin: greenWizard,
  Hufflepuff: blueWizard,
  Ravenclaw: yellowWizard,
  default: unknownWizard
};

function CharacterCard({ character }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the character is already in favorites
    fetch('http://localhost:3000/favorites')
      .then(response => response.json())
      .then(favorites => {
        const alreadyFavorited = favorites.some(fav => fav.id === character.id);
        setIsFavorite(alreadyFavorited);
      })

  }, [character.id]);

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      fetch('http://localhost:3000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(character),
      })
        .then((response) => {
          if (response.ok) {
            setIsFavorite(true);
          } 
        })
    }
  };


  const characterImage = character.image 
    ? character.image 
    : defaultHouseImages[character.house] || defaultHouseImages.default;

  return (
    <article className="character-card">
      <h2>{character.name}</h2>
      <img src={characterImage} alt={character.name} />
      <p>House: {character.house || "Unknown"}</p>
      {!isFavorite ? (
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
      ) : (
        <p>in Favorites</p>
      )}
    </article>
  );
}

export default CharacterCard;
