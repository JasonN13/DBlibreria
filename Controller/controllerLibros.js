import { db } from "../db/conexion.js";

const getLibros = async (req,res) =>{

    const sql =`select * from Libros`;
    const result = await db.query(sql);


    return res.json(result) 


}

const postLibros =async (req,res)=>{
    const {titulo,autor,genero,anio_publicacion,isbn,disponibilidad} = req.body;

    const dataisert = [titulo,autor,genero,anio_publicacion,isbn,disponibilidad]

    const sql = `insert into Libros
                  (titulo,autor,genero,anio_publicacion,isbn,disponibilidad)
                  values
                   ($1,$2,$3,$4,$5,$6) returning titulo,autor,genero,anio_publicacion,isbn,disponibilidad`

    const result = await db.query (sql,dataisert )              

    return res.json({ mensaje: "Se agregó el libro  exitosamente", Obj_insertado: result });
}

export {getLibros,postLibros}