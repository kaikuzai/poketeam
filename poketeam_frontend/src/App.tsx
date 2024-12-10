import { Route, Routes } from "react-router-dom";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import AppIndex from "./Index";
import PokemonDetailPage from "./components/Pages/PokemonDetailPage/PokemonDetailPage";
import AuthenticationCheck from "./pages/User/AuthenticationCheck";
import CSRFTokenCheck from "./pages/User/CSRFTokenCheck";

function App() {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/auth-check" element={<AuthenticationCheck />}/>
      <Route path="/token-check" element={<CSRFTokenCheck />}/>
      <Route path="/" element={<AppIndex />} />
      <Route path="/detail/:pokemon_id" element={<PokemonDetailPage />} />
    </Routes>
  );
}

export default App;
