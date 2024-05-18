import { db } from "../db/conexion.js"


const getLperdidos = async (req,res) =>{

    const sql =`select * from Libros_Perdidos`;
    const result = await db.query(sql);


    return res.json(result) 


}

const getLperdidosid = async (req,res) =>{

    const {id} = req.params;

    const sql =`select * from Libros_Perdidos where perdida_id = $1`;
    const result = await db.query(sql,[id]);


    return res.json(result) 


}

const postLperdidos = async (req,res)=>{
    const {libro_id,fecha_notificacion,usuario_id} = req.body;

    const dataisert = [libro_id,fecha_notificacion,usuario_id]

    const sql = `insert into Libros_Perdidos
                  (libro_id,fecha_notificacion,usuario_id)
                  values
                   ($1,$2,$3) returning *`

    const result = await db.query (sql,dataisert )              

    return res.json({ mensaje: "Se agregó el libro perdido exitosamente", Obj_indertado: result });
}

export {getLperdidos,postLperdidos,getLperdidosid}
