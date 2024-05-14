import express from 'express'
const Personas = express();

import { getusuarios,postusuarios } from '../Controller/controllerUsuarios.js';


Personas.get('/',getusuarios);

Personas.post('/',postusuarios)

export{Personas}