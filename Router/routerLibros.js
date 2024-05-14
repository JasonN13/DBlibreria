import express from 'express'
const RLibros = express();

import { getLibros,postLibros } from '../Controller/controllerLibros.js';


RLibros.get('/',getLibros);

RLibros.post('/',postLibros)

export{RLibros}