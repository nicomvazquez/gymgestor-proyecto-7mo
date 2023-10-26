import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM producto");
  res.json(result);
};

export const getProducto = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM producto WHERE id_producto = ?",
    [req.params.id]
  );
  res.json(result[0]);
};

export const postProducto = async (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;
  const [result] = await pool.query(
    "INSERT INTO producto(nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)",
    [nombre, descripcion, precio, stock]
  );
  res.json({
    id: result.insertId,
    nombre,
    descripcion,
    precio,
    stock,
  });
};

export const putProducto = async (req, res) => {
  const result = await pool.query(
    "UPDATE procuctos SET ? WHERE id_producto = ?",
    [req.body, req.params.id]
  );
  res.send("producto actualizadoo");
};

export const deleteProducto = (req, res) => {
  pool.query("DELETE FROM producto WHERE id_producto = ?", [req.params.id]);
  res.send("producto eliminado");
};
