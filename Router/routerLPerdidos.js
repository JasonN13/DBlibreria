import express from 'express'
const RLPerdidos = express();

import { getLibrosPerdidos } from '../Controller/controllerLPerdidos.js';


RLPerdidos.get('/',getLibrosPerdidos);



export{RLPerdidos}