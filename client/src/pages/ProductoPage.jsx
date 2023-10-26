import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/clientePage.css";

import ProductoCard from "../components/ProductoCard.jsx";
import Navbar from "../components/Navbar.jsx";

import { getProductoRequest } from "../apis/producto.api";

function ProductoPage() {
  const [producto, setProducto] = useState([]);

  async function loadProducto() {
      const response = await getProductoRequest();
      setProducto(response.data);
    }
  
  useEffect(() => {
    loadProducto();
  }, []);

  return (
    <div className="cliente-page">
      <Navbar></Navbar>
      <div className="header">
        <h2 className="header-title">Pagina de productos</h2>
        <Link to="/addProduct">
          <button className="header-button">agregar productos</button>
        </Link>
      </div>
      <div className="cards-content">
        {producto.map((producto) => (
          <ProductoCard producto={producto} loadProducto={loadProducto()} key={producto.id_producto} />
        ))}
      </div>
    </div>
  );
}

export default ProductoPage;
