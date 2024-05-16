import express from 'express'
const Librosperdidos = express();

import { getLperdidos,postLperdidos,getLperdidosid } from '../Controller/controllerLibros_Perdidos.js';


Librosperdidos.get('/',getLperdidos);



Librosperdidos.get('/:id',getLperdidosid);





Librosperdidos.post('/',postLperdidos);

export{Librosperdidos}