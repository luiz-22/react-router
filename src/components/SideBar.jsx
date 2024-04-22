import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <ul>
        <li>
          <Link to="" className={styles.article}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="rutas-basicas" className={styles.article}>
            Rutas básicas
          </Link>
        </li>
        <li>
          <Link to="rutas-parametros" className={styles.article}>
            Rutas con parámetros
          </Link>
        </li>
        <li>
          <Link to="rutas-secundarias" className={styles.article}>
            Rutas Secundarias
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
