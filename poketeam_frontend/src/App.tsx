import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Rootstate } from "./state/store";
import { routes } from "./routes/routeConfig";
import ProtectedRoute from "./routes/protectedRoute";

function App() {
  const isAuthenticated = useSelector(
    (state: Rootstate) => state.authorization.authorization.isAuthenticated
  );

  return (
    <Routes>
      {routes.map(({ path, element: Element, isProtected }) => (
        <Route
          key={path}
          path={path}
          element={
            isProtected ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Element />
              </ProtectedRoute>
            ) : (
              <Element />
            )
          }
        />
      ))}
    </Routes>
  );
}

export default App;
