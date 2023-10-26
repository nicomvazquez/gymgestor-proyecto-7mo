import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/clientePage.css";

import ClienteCard from "../components/ClienteCard.jsx";
import Navbar from "../components/Navbar.jsx";

import { useClient } from "../context/Provider.jsx";

function ClientePage() {
  const { clientes, loadCliente } = useClient();

  useEffect(() => {
    loadCliente();
  }, []);

  function renderMainPage() {
    if (clientes.length === 0) return <h1>no hay tareas</h1>;
    return clientes.map((cliente) => (
      <ClienteCard key={cliente.id} cliente={cliente} />
    ));
  }

  return (
    <div className="cliente-page">
      <Navbar></Navbar>
      <div className="header">
        <h2 className="header-title">Pagina de clientes</h2>
        <Link to="/addClient">
          <button className="header-button">agregar clientes</button>
        </Link>
      </div>
      <div className="cards-content">{renderMainPage()}</div>
    </div>
  );
}

export default ClientePage;
