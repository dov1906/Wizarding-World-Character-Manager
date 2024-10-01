import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard'; 
import NavBar from '../components/NavBar';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>All Characters</h1>
        <div>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </main>
    </>
  );
}

export default CharacterList;
