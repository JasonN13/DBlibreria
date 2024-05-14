import express from 'express'
import { Librosperdidos } from './Router/routerLibros_Perdidos.js';
import { RLibros } from './Router/routerLibros.js';
import { Lprestamos } from './Router/routerPrestamos.js';
import { Personas } from './Router/routerUsuarios.js';
const app = express();

app.use(express.json());

app.use('/Libros_Perdidos', Librosperdidos);

app.use('/Libros',RLibros);

app.use('/Prestamos',Lprestamos);

app.use('/Usuarios',Personas);

app.listen(3000,()=>{
    console.log("iniciando en el puerto 3000")
});