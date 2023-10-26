import { pool } from "../db.js";

export const getClientes = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM cliente");
    res.json(result);
};

export const getCliente = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM cliente WHERE id_cliente = ?",
    [req.params.id]
  );
  res.json(result[0]);
};

export const postCliente = async (req, res) => {
  const { nombre, apellido, dni } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO cliente(nombre, apellido, dni) VALUES (?, ?, ?)",
      [nombre, apellido, dni]
    );
    res.json({
      id: result.insertId,
      nombre,
      apellido,
      dni,
    });
    const [result2] = await pool.query(
      "INSERT INTO mensualidad(id_cliente) VALUES (?)",
      [result.insertId]
    );
  } catch (error) {
    console.log(error);
  }
};

export const putCliente = async (req, res) => {
  const result = await pool.query("UPDATE cliente SET ? WHERE id_cliente = ?", [
    req.body,
    req.params.id,
  ]);
  res.send("cliente actualizado");
};

export const deleteCliente = async (req, res) => {
  const result = await pool.query("DELETE FROM cliente WHERE id_cliente = ?", [
    req.params.id,
  ]);
  const result2 = await pool.query(
    "DELETE FROM mensualidad WHERE id_cliente = ?",
    [req.params.id]
  );
  res.send("cliente eliminado");
};
