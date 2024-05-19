import { db } from "../db/conexion.js";


const getRegistrousuarios = async (req,res) => {
  const sql =`SELECT * FROM Usuarios`

  const result = await db.query(sql);
  return res.json(result)
}

export {getRegistrousuarios}
