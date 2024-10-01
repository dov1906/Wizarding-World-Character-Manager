import React from 'react';
import CharacterCard from '../components/CharacterCard';
import NavBar from '../components/NavBar';

const FavoriteCharacters = ({ favorites }) => {
  return (
    <div>
    <header>
      <NavBar/>
    </header>
    
    
      <h2>Favorite Characters</h2>
      <p>No favorite characters yet.</p>
    </div>
  );
};

export default FavoriteCharacters;
