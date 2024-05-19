import { db } from "../db/conexion.js";


const getRegistroLibros = async (req,res) => {
  const sql =`SELECT * FROM Libros`

  const result = await db.query(sql);
  return res.json(result)
}

export {getRegistroLibros}
