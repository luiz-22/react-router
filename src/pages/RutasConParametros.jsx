import { Routes, Route, NavLink } from "react-router-dom";
import User from "./components/User";

function RutasConParametros() {
  return (
    <div>
      <h1>Rutas con parámetros</h1>

      <Routes>
        <Route path="/*" element={<User />} />
        <Route path="/:id" element={<User />} />
      </Routes>

      <NavLink
        to="/rutas-parametros/12"
      >
        Ir a User 12
      </NavLink>
    </div>
  );
}

export default RutasConParametros;
