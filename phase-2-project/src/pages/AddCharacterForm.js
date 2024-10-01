import { useState } from "react";
import NavBar from "../components/NavBar";

function AddCharacterForm() {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    species: "",
    gender: "",
    house: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCharacter({ ...newCharacter, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add new character (POST request)
    console.log('New character added:', newCharacter);
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Add a New Character</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input type="text" name="name" value={newCharacter.name} onChange={handleChange} />
          </div>
          <div>
            <label>Species: </label>
            <input type="text" name="species" value={newCharacter.species} onChange={handleChange} />
          </div>
          <div>
            <label>Gender: </label>
            <input type="text" name="gender" value={newCharacter.gender} onChange={handleChange} />
          </div>
          <div>
            <label>House: </label>
            <input type="text" name="house" value={newCharacter.house} onChange={handleChange} />
          </div>
          <input type="submit" value="Add Character" />
        </form>
      </main>
    </>
  );
}

export default AddCharacterForm;
