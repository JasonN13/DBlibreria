import { db } from "../db/conexion.js"


const getLperdidos = async (req,res) =>{

    const sql =`select * from Libros_Perdidos`;
    const result = await db.query(sql);


    return res.json(result) 


}

const postLperdidos = async (req,res)=>{
    const {fecha_notificacion} = req.body;

    const dataisert = [fecha_notificacion]

    const sql = `insert into Libros_Perdidos
                  (fecha_notificacion)
                  values
                   ($1) returning perdida_id,libro_id,fecha_notificacion,usuario_id`

    const result = await db.query (sql,dataisert )              

    return res.json({ mensaje: "Se agregó el libro perdido exitosamente", Obj_indertado: result });
}

export {getLperdidos,postLperdidos}
