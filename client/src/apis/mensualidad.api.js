import axios from "axios"

export const getClienteVencidoRequest = async () =>
  await axios.get("http://localhost:4000/vencido");
