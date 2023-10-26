import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/clientePage.css";

import ClienteVencidoCard from "../components/ClienteVencidoCard.jsx";
import Navbar from "../components/Navbar.jsx";

import { getClienteVencidoRequest } from "../apis/mensualidad.api.js";

function ClienteVencidoPage() {
  const [vencido, setVencido] = useState([]);

  useEffect(() => {
    async function loadVencido() {
      const response = await getClienteVencidoRequest();
      setVencido(response.data);
    }
    loadVencido();
  }, []);

  return (
    <div className="cliente-page">
      <Navbar></Navbar>
      <div className="header">
        <h2 className="header-title">pagina de clientes vencidos</h2>
      </div>
      <div className="cards-content">
        {vencido.map((vencido) => (
          <ClienteVencidoCard cliente={vencido} key={vencido.id_cliente} />
        ))}
      </div>
    </div>
  );
}

export default ClienteVencidoPage;
