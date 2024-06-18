import { db } from "../db/conexion.js";
import  jwt  from "jsonwebtoken";

const Registro = async (req, res)=>{
    try{
        const { nombre_usuario, nombre , apellido,
            email ,
            contrasena 
             } =req.body;
   
  const sql = `insert into TBLusuarios
               (nombre_usuario, nombre , apellido,
                email ,
                contrasena
                 )
               values
               ($1, $2, $3 ,$4 ,$5) returning *`;
               
  const resul = await db.query(sql,[nombre_usuario,nombre,apellido,
                                    email ,
                                    contrasena 
                                    ]);

             res.status(200).json({mensaje:"Usuario creado",obj_creado: resul });                       
    }catch(err){
            res.status(500).json({mensaje:`Error de compilacion`,err: err.message })
    }
} 

const Verificar = async (req, res)=>{
    try{
        const {nombre_usuario , contrasena}= req.body;
        const sql = `select nombre_usuario ,nombre ,email from TBLusuarios where nombre_usuario = $1 and contrasena = $2 and activo = true`;

        const result = await db.query (sql,[nombre_usuario,contrasena])
      
        if(result.length === 0){
            res.status(404).json({mensaje:"credenciales invalidas"})
        }else{
        
               const payload = result[0];
               const token = jwt.sign(payload,'secret',{expiresIn: '5h' });



            res.status(200).json({mensaje:"autenticacion exitosa", info_user:token})
        }
    }catch(err){
       res.status(500).json({mesaje:"Error de autenticacion", err: err.message})
    }
    

}

export {
    Registro,
    Verificar
}
