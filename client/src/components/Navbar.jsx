import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src="../../public/logo.png" className="logo"/>
      <h1 className="title">GYM GESTOR</h1>
      <div className="button-container">
        <Link to="/client" className="link">
          Clientes
        </Link>
        <Link to="/clientOut" className="link">
          Clientes vencidos
        </Link>
        <Link to="/products" className="link">
          Productos
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
