import express from "express";
import cors from "cors";

import { PORT } from "./config.js";

import indexRouter from "./routes/index.routes.js";
import clientesRouter from "./routes/cliente.routes.js";
import vencidosRouter from "./routes/mensualidad.routes.js";
import productosRouter from "./routes/productos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRouter);
app.use(clientesRouter);
app.use(vencidosRouter);
app.use(productosRouter);

app.listen(PORT);
console.log("server listen on port", PORT);
