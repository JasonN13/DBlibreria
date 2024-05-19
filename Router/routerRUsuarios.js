import express from 'express'
const Registro_Usuarios = express();

import { getRegistrousuarios } from '../Controller/ControllerRegistroUsuarios.js';


Registro_Usuarios.get('/',getRegistrousuarios);



export{Registro_Usuarios} 