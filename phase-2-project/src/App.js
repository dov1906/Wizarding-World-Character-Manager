// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CharacterList from './pages/CharacterList';
// import AddCharacterForm from './pages/AddCharacterForm';
// import FavoriteCharacters from './pages/FavoriteCharacters';

// const App = () => {
//   const [characters, setCharacters] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     // Fetching character data from the backend
//     fetch('/db.json') // Assuming db.json is hosted or available via a server
//       .then(response => response.json())
//       .then(data => setCharacters(data.characters))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const addToFavorites = (character) => {
//     if (!favorites.some(fav => fav.id === character.id)) {
//       setFavorites([...favorites, character]);
//     }
//   };

//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<CharacterList characters={characters} addToFavorites={addToFavorites} />} />
//         <Route path="/add-character" element={<AddCharacterForm />} />
//         <Route path="/favorites" element={<FavoriteCharacters favorites={favorites} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
