import React from 'react';
import FavoriteCharacterCard from '../components/FavoriteCharacterCard';
import NavBar from '../components/NavBar';

function FavoriteCharacters() {
 
  const favoriteCharacters = []; 

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Favorite Characters</h1>
        {favoriteCharacters.length > 0 ? (
          favoriteCharacters.map(character => (
            <FavoriteCharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No favorite characters yet.</p>
        )}
      </main>
    </>
  );
}

export default FavoriteCharacters;
