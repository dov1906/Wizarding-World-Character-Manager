# Wizarding World Character Manager

This is a **Wizarding World Character Manager** built with React, enabling users to manage and view characters from the magical world. Users can view all characters, filter them by house, add new characters, and maintain a list of their favorite characters.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Character List View**: View all characters, search by name, and filter by house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw).
- **Add New Character**: Add new characters to the database by filling out a form with the character's name, house, and image URL.
- **Favorite Characters**: Manage a list of favorite characters by adding or removing them from the favorites page.
- **Responsive Design**: Built with a flexible grid layout that adapts to different screen sizes.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/wizarding-world-character-manager.git
   cd wizarding-world-character-manager
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   This will start the server and open the app in your browser at `http://localhost:3000`.

4. **Backend server**: 
   The app interacts with a local JSON server, which should be running on port `3000`. You can set it up using:
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 3000
   ```

## Usage

Once the app is running, you can:

- **View all characters**: Visit the homepage to see all characters. You can use the search bar to filter by name and use the dropdown menu to filter by house.
- **Add a new character**: Navigate to `/add-character` and fill in the form with the character's details (name, house, image URL).
- **Favorite characters**: Visit `/favorites` to view characters you've added to your favorites. You can add a character to favorites from the character list.

## Project Structure

```
src/
├── components/
│   ├── CharacterCard.js       # Displays individual character details
│   ├── NavBar.js              # Navigation bar for routing between pages
│   ├── AddCharacterForm.js    # Form for adding a new character
│   └── FavoriteCharacterCard.js # Displays individual favorite characters
├── pages/
│   ├── CharacterList.js       # Main page to display all characters with filters
│   ├── FavoriteCharacters.js  # Page displaying the list of favorite characters
│   ├── ErrorPage.js           # Error page displayed when a route fails
├── routes/
│   └── routes.js              # Contains the app's routing logic
├── App.js                     # Main app component
├── index.js                   # Entry point for the app
└── theme.css                  # Styling for the app
```

### API Endpoints:

- `GET /characters`: Fetch all characters.
- `POST /characters`: Add a new character.
- `GET /favorites`: Fetch all favorite characters.
- `POST /favorites`: Add a character to favorites.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes. We appreciate any contributions!

## License

This project is licensed under the MIT License.
