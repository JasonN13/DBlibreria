import { db } from "../db/conexion.js";

const getRPrestamos = async (req,res) =>{
    const sql =`SELECT
               u.nombre AS nombre_usuario,
               l.titulo AS titulo_libro,
               p.fecha_prestamo
               FROM
               Prestamos p
               JOIN
               Libros l ON p.libro_id = l.libro_id
               JOIN
               Usuarios u ON p.usuario_id = u.usuario_id -- Quién realizó el préstamo
               ORDER BY
               p.fecha_prestamo;`;
    
    const result = await db.query(sql);
    return res.json(result) 
}
export {getRPrestamos}

