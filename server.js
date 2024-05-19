import express from 'express'
import { Librosperdidos } from './Router/routerLibros_Perdidos.js';
import { RLibros } from './Router/routerLibros.js';
import { Lprestamos } from './Router/routerPrestamos.js';
import { Personas } from './Router/routerUsuarios.js';
import { RegistroPrestamos } from './Router/RouterRPrestamos.js';
import { RLPerdidos } from './Router/routerLPerdidos.js';
import { Registro_Usuarios } from './Router/routerRUsuarios.js';
import  cors from 'cors'


const app = express();

app.use(cors());

app.use(express.json());

app.use('/Libros_Perdidos', Librosperdidos);

app.use('/Libros',RLibros);

app.use('/Prestamos',Lprestamos);

app.use('/Usuarios',Personas);

app.use('/Registro_Prestamos',RegistroPrestamos)

app.use('/Registro_libros_perdidos',RLPerdidos)

app.use('/Registro_NUsuarios',Registro_Usuarios)

app.listen(3000,()=>{
    console.log("iniciando en el puerto 3000")
});