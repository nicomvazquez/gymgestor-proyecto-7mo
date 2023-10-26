export const getRutinas = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM rutina");
  res.json(result);
};

export const getRutina = (req, res) => {
  const [result] = pool.query('SELECT * FROM rutina WHERE id_rutina = ?')
};

export const postRutina = (req, res) => {
  res.json("agregando rutina");
};

export const putRutina = (req, res) => {
  res.json("actualizando rutina");
};

export const deleteRutina = (req, res) => {
  res.json("eliminando clientes");
};
