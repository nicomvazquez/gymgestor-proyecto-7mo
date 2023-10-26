import { Router } from "express";
import {
  getVencido
} from "../controllers/mensualidad.controllers.js";

const router = Router();

router.get("/vencido", getVencido);

export default router;
