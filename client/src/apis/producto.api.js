import axios from "axios";

export const getProductoRequest = async () =>
  await axios.get("http://localhost:4000/productos");

export const createProductoRequest = async (producto) =>
  await axios.post("http://localhost:4000/productos", producto);

export const deleteProductoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/productos/${id}`);
