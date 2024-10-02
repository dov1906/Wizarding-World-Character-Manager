import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import NavBar from '../components/NavBar';


function FavoriteCharacters() {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/favorites')
      .then((response) => response.json())
      .then((data) => setFavoriteCharacters(data))
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Favorite Characters</h1>
        <div className="favorite-list">
          {favoriteCharacters.length > 0 ? (
            favoriteCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} showAddToFavoritesButton={false} />
            ))
          ) : (
            <p>No favorite characters yet.</p>
          )}
        </div>
      </main>
    </>
  );
}

export default FavoriteCharacters;
