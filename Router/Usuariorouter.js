import express from 'express';

const usuario = express();
import { Registro,Verificar } from '../Controller/Usuariocontroller.js';


usuario.post('/', Registro)

usuario.post('/auth',Verificar)


export {usuario}