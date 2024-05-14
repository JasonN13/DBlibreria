import { db } from "../db/conexion.js";

const getusuarios = async (req,res) =>{

    const sql =`select * from Usuarios`;
    const result = await db.query(sql);


    return res.json(result) 
}

const postusuarios = async (req,res)=>{
    const {nombre,direccion,telefono,correo_electronico} = req.body;

    const dataisert = [nombre,direccion,telefono,correo_electronico]

    const sql = `insert into Usuarios
                  (nombre,direccion,telefono,correo_electronico)
                  values
                   ($1,$2,$3,$4) returning usuario_id,nombre,direccion,telefono,correo_electronico`

    const result = await db.query (sql,dataisert )              

    return res.json({ mensaje: "Se agregó el Usuario exitosamente", Obj_indertado: result });
}

export {getusuarios,postusuarios}