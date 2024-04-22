import { NavLink } from "react-router-dom";
import styles from "./NavRutasBasicas.module.css"

// <NavLink> puede recibir un objeto, que tiene la propiedad isActive que determina si el link está activo.

export default function NavRutasBasicas() {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <NavLink
            to="/rutas-basicas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rutas-basicas/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
           Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/rutas-basicas/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
