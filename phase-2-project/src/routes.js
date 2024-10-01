import CharacterList from "./pages/CharacterList";
import AddCharacterForm from "./pages/AddCharacterForm";
import FavoriteCharacters from "./pages/FavoriteCharacters";
import ErrorPage from "./pages/ErrorPage";
import Greetings from "./pages/Greetings";

const routes = [
  {
    path: "/",
    element: <CharacterList />,
    errorElement: <ErrorPage />
  },
  {
    path: "/add-character",
    element: <AddCharacterForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/favorites",
    element: <FavoriteCharacters />,
    errorElement: <ErrorPage />
  },
  {
    path: "/greetings",
    element: <Greetings/>,
    errorElement: <ErrorPage />
  }
];

export default routes;
