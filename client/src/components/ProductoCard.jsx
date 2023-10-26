import { deleteProductoRequest } from "../apis/producto.api";
import "../styles/clienteCard.css";

function ProductoCard({ producto, loadProducto }) {
  const comfirmar = async (id) => {
      await deleteProductoRequest(id);
      loadProducto();
  };

  return (
    <div className="client-card">
      <h1 className="client-name">{producto.nombre}</h1>
      <p className="client-surname">{producto.descripcion}</p>
      <p className="client-dni">${producto.precio}</p>
      <h1 className="client-name">stock: {producto.stock}</h1>
      <div className="content-button">
        <button
          onClick={() => comfirmar(producto.id_producto)}
          className="button-delete"
        >
          eliminar
        </button>
        <button className="button-edit">editar</button>
      </div>
    </div>
  );
}

export default ProductoCard;
