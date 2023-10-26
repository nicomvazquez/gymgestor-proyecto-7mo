import { Router } from "express";
import {
  getRutinas,
  getRutina,
  postRutina,
  putRutina,
  deleteRutina,
} from "../controllers/rutinas.controllers.js";

const router = Router();

router.get("/rutinas", getRutinas);

router.get("/rutinas/:id", getRutina);

router.post("/rutinas", postRutina);

router.put("/rutinas", putRutina);

router.delete("/rutinas", deleteRutina);

export default router
