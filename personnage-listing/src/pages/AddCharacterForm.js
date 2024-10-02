import { useState } from "react";
import NavBar from "../components/NavBar";

function AddCharacterForm() {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    house: "",
    image: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCharacter({ ...newCharacter, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharacter),
    })
      .then((response) => {
        if (response.ok) {
          setNewCharacter({
            name: "",
            house: "",
            image: ""
          });
        } else {
          throw new Error("Failed to add character");
        }
      })
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
            <input
              type="text"
              name="name"
              value={newCharacter.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>House: </label>
            <input
              type="text"
              name="house"
              value={newCharacter.house}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Image URL: </label>
            <input
              type="text"
              name="image"
              value={newCharacter.image}
              onChange={handleChange}
              required
            />
          </div>
          <input type="submit" value="Add Character" />
        </form>
      </main>
    </>
  );
}

export default AddCharacterForm;
