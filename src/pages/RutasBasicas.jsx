import { Routes, Route } from "react-router-dom";
import NavRutasBasicas from "./components/NavRutasBasicas";

function RutasBasicas() {
  return (
    <div>
      <h1>Rutas básicas</h1>
      <NavRutasBasicas />

      <Routes>
        <Route path="/" element={<h2>Welcome</h2>} />
        <Route path="/services" element={<h2>Services</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="*" element={<h2>400 Page not found.</h2>} />
      </Routes>
    </div>
  );
}

export default RutasBasicas;
