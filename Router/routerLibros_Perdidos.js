import express from 'express'
const Librosperdidos = express();

import { getLperdidos,postLperdidos } from '../Controller/controllerLibros_Perdidos.js';


Librosperdidos.get('/',getLperdidos);

Librosperdidos.post('/',postLperdidos);

export{Librosperdidos}