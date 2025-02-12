import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import AuthenticationCheck from "../pages/User/AuthenticationCheck";
import CSRFTokenCheck from "../pages/User/CSRFTokenCheck";
import AppIndex from "../Index";
import PokemonDetailPage from "../components/Pages/PokemonDetailPage/PokemonDetailPage";

interface RouteConfig {
    path: string,
    element: React.FC,
    isProtected: boolean,

}

export const routes: RouteConfig[] = [
    { path: '/login', element: Login, isProtected: false },
    { path: '/register', element: Register, isProtected: false },
    { path: '/auth-check', element: AuthenticationCheck, isProtected: false },
    { path: 'token-check', element: CSRFTokenCheck, isProtected: false },
    { path: '/', element: AppIndex, isProtected: true },
    { path: '/detail/:pokemon_id', element: PokemonDetailPage, isProtected: true }
]