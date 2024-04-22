import { Link, Outlet, useNavigate } from "react-router-dom";

function RutasSecundarias() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/rutas-secundarias/", {
      // replace: true
    });
  };

  return (
    <div>
      <h1>Rutas secundarias</h1>

      <Link to="chart">Chart</Link>
      <Outlet />
      <button onClick={handleClick}>Logout</button>

    </div>
  );
}

export default RutasSecundarias;
