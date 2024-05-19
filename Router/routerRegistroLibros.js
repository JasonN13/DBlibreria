import express from 'express'
const Registro_Libros = express();

import { getRegistroLibros } from '../Controller/ControllerRegistroLibros.js';


Registro_Libros.get('/',getRegistroLibros);



export{Registro_Libros} 