import { pool } from "../db.js";

export const getVencido = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM mensualidad m INNER JOIN cliente c ON m.id_cliente = c.id_cliente WHERE DATEDIFF(CURDATE(), fecha_pago) >= 30"
  );
  res.json(result);
};

