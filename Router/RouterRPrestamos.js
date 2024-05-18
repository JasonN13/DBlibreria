import express from 'express'
const RegistroPrestamos = express();

import { getRPrestamos } from '../Controller/controllerRegistroPrestamos.js';


RegistroPrestamos.get('/',getRPrestamos);



export{RegistroPrestamos} 