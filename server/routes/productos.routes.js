import { Router } from "express";
import {
  getProductos,
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
} from "../controllers/productos.controllers.js";

const router = Router();

router.get("/productos", getProductos);

router.get("/productos/:id", getProducto);

router.post("/productos", postProducto);

router.put("/productos/:id", putProducto);

router.delete("/productos/:id", deleteProducto);

export default router;
