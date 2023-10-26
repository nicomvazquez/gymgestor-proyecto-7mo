import { deleteClienteRequest } from "../apis/cliente.api";
import { useClient } from "../context/Provider.jsx";
import {useNavigate} from 'react-router-dom'

import "../styles/clienteCard.css";

function ClienteCard({ cliente }) {
  const { deleteCliente } = useClient();
  const navigate = useNavigate()

  return (
    <div className="client-card">
      <h1 className="client-name">nombre: {cliente.nombre}</h1>
      <p className="client-surname">apellido: {cliente.apellido}</p>
      <p className="client-dni">dni: {cliente.dni}</p>
      <div className="content-button">
        <button
          onClick={() => deleteCliente(cliente.id_cliente)}
          className="button-delete"
        >
          eliminar
        </button>
        <button onClick={() => navigate(`/editClient/${cliente.id_cliente}`)} className="button-edit">editar</button>
      </div>
    </div>
  );
}

export default ClienteCard;
