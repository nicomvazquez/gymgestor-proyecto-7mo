import "../styles/clienteVencidoCard.css";

function ClienteVencidoCard({ cliente }) {
  return (
    <div className="client-expired-card">
      <h1 className="client-name">{cliente.nombre}</h1>
      <p className="client-surname">{cliente.apellido}</p>
      <p className="client-dni">{cliente.dni}</p>
    </div>
  );
}

export default ClienteVencidoCard;
