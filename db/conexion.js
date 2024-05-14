import pg from 'pg-promise'
const pgp =pg();

const conexion = 'postgresql://postgres:Jason1708@localhost:5432/postgres';

const db = pgp(conexion);

db.connect()
.then( ()=>{
    console.log ("Conexion Exitosa")
})

.catch( (err)=>{
    console.log(`error de coneccion ${err}`)
})

export {db}