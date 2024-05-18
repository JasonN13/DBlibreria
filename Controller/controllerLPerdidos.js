import { db } from "../db/conexion.js";

 const getLibrosPerdidos = async (req, res) => {
  
        
        const sql = `
                SELECT
                u.nombre AS nombre_usuario,
                l.titulo AS titulo_libro,
                lp.fecha_notificacion AS fecha_extravio
                FROM
                Libros_Perdidos lp
                JOIN
                Libros l ON lp.libro_id = l.libro_id
                JOIN
                Usuarios u ON lp.usuario_id = u.usuario_id;
        `;
        const result = await db.query(sql);
        return res.json(result) 
        console.log(result)
};

export {getLibrosPerdidos}

