import { createContext, useContext, useState } from "react";
import {
  getClienteRequest,
  deleteClienteRequest,
  createClienteRequest,
  getClientesRequest,
  updateClienteRequest,
} from "../apis/cliente.api";
import { Context } from "./Context.jsx";

export const useClient = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("no se encuentra dentro del contextProvider");
  }
  return context;
};

export const ContextProvider = ({ children }) => {
  //arreglo de clientes
  const [clientes, setClientes] = useState([]);

  //funcion que carga los clientes dentro del contexto
  async function loadCliente() {
    const response = await getClienteRequest();
    setClientes(response.data);
  }

  //funcion para eliminar os clientes dentrod el contexto
  const deleteCliente = async (id) => {
    try {
      const response = await deleteClienteRequest(id);
      setClientes(clientes.filter((cliente) => cliente.id !== id));
      loadCliente();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //funcion para crear clientes dentro del context
  const createCliente = async (cliente) => {
    try {
      const response = await createClienteRequest(cliente);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // funcion para obtener los datos de un cliente para cargar
  // cargar en el ormulario de editar
  const getCliente = async (id) => {
    try {
      const response = await getClientesRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //funcion para editar los clientes
  const editarCliente = async (id, newData) => {
    try {
      const response = await updateClienteRequest(id, newData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        clientes: clientes,
        loadCliente,
        deleteCliente,
        createCliente,
        getCliente,
        editarCliente,
      }}
    >
      {children}
    </Context.Provider>
  );
};
