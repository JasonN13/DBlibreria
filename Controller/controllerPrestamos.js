import { db } from "../db/conexion.js";


const getprestamos = async (req,res) =>{

    const sql =`select * from Prestamos`;
    const result = await db.query(sql);


    return res.json(result) 
}

const postprestamos = async (req,res)=>{
    const {fecha_prestamo,fecha_devolucion} = req.body;

    const dataisert = [fecha_prestamo,fecha_devolucion]

    const sql = `insert into Prestamos
                  (fecha_prestamo,fecha_devolucion)
                  values
                   ($1,$2) returning prestamo_id,usuario_id,libro_id,fecha_prestamo,fecha_devolucion`

    const result = await db.query (sql,dataisert )              

    return res.json({ mensaje: "Se agregó el prestamo del libro  exitosamente", Obj_indertado: result });
}

export {getprestamos,postprestamos}