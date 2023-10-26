import { Router } from "express";
import {
  getClientes,
  getCliente,
  postCliente,
  putCliente,
  deleteCliente,
} from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/clientes", getClientes);

router.get("/clientes/:id", getCliente);

router.post("/clientes", postCliente);

router.put("/clientes/:id", putCliente);

router.delete("/clientes/:id", deleteCliente);

export default router;
