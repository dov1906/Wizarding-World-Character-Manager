import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import NavBar from '../components/NavBar';


function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("All");

  useEffect(() => {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))

  }, []);


  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHouse = selectedHouse === "All" || character.house === selectedHouse;
    return matchesSearch && matchesHouse;
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>All Characters</h1>

        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* House Filter */}
        <div>
          <label>Filter by House: </label>
          <select value={selectedHouse} onChange={(e) => setSelectedHouse(e.target.value)}>
            <option value="All">All Houses</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </div>

        {/* Display Filtered Characters */}
        <div className="character-list">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
          ) : (
            <p>No characters match your search.</p>
          )}
        </div>
      </main>
    </>
  );
}

export default CharacterList;
