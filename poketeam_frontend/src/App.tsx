import { Route, Routes } from "react-router-dom";
import AppIndex from "./Index";
import PokemonDetailPage from "./components/Pages/PokemonDetailPage/PokemonDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppIndex />} />
      <Route path="/detail/:pokemon_id" element={<PokemonDetailPage />} />
    </Routes>
  );
}

export default App;
