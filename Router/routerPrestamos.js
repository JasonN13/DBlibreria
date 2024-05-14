import express from 'express'
const Lprestamos = express();

import { getprestamos,postprestamos } from '../Controller/controllerPrestamos.js';


Lprestamos.get('/',getprestamos);

Lprestamos.post('/',postprestamos)

export{Lprestamos}