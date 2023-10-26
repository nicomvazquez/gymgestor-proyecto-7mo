import axios from "axios";

export const getClienteRequest = async () =>
  await axios.get("http://localhost:4000/clientes");

export const createClienteRequest = async (cliente) =>
  await axios.post("http://localhost:4000/clientes", cliente);

export const deleteClienteRequest = async (id) =>
  await axios.delete(`http://localhost:4000/clientes/${id}`);

  // get un solo cliente, esta en plural porque me confundi 
  // y es un re quilombo arreglar xdxd
export const getClientesRequest = async (id) =>
  await axios.get(`http://localhost:4000/clientes/${id}`);
  
export const updateClienteRequest = async (id, newData) =>
  await axios.put(`http://localhost:4000/clientes/${id}`, newData);
