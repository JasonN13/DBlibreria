import express from 'express'
import { Librosperdidos } from './Router/routerLibros_Perdidos.js';
import { RLibros } from './Router/routerLibros.js';
import { Lprestamos } from './Router/routerPrestamos.js';
import { Personas } from './Router/routerUsuarios.js';
import { RegistroPrestamos } from './Router/RouterRPrestamos.js';
import { RLPerdidos } from './Router/routerLPerdidos.js';
import { Registro_Usuarios } from './Router/routerRUsuarios.js';
import { Registro_Libros } from './Router/routerRegistroLibros.js';
import { usuario } from './Router/Usuariorouter.js';
import jwt from 'jsonwebtoken'
import  cors from 'cors'


const VerificarToken = (req, res, next) => {

    const symbols = Object.getOwnPropertySymbols(req);
    // Encontrar el símbolo específico [Symbol(kHeaders)]
    const kHeadersSymbol = symbols.find(sym => sym.toString() === 'Symbol(kHeaders)');
  
    if (kHeadersSymbol) {
        const headers = req[kHeadersSymbol];
        const auth = headers.authorization;
  
        if (auth) {
            const auth_arr = auth.split(" ");
            const token = auth_arr[1];
  
            try {
                const tokenDecode = jwt.verify(token, 'secret')
                req.user = tokenDecode;
                next();
            } catch (err) {
  
                res.status(404).json(err.message)
  
            }
        }else {
            return res.status(403).json({ mensaje: "Se requiere un token, para acceder al metodo" })
        }
  
    } 
  
  };

const app = express();

app.use(cors());

app.use(express.json());

app.use('/Nuevo_usuario', usuario);

app.use('/Libros_Perdidos',VerificarToken, Librosperdidos);

app.use('/Libros',VerificarToken,RLibros);

app.use('/Prestamos',VerificarToken,Lprestamos);

app.use('/Usuarios',VerificarToken,Personas);

app.use('/Registro_Prestamos',VerificarToken,RegistroPrestamos)

app.use('/Registro_libros_perdidos',VerificarToken,RLPerdidos)

app.use('/Registro_NUsuarios',VerificarToken,Registro_Usuarios)

app.use('/Registro_NLibros',VerificarToken,Registro_Libros)

app.listen(3000,()=>{
    console.log("iniciando en el puerto 3000")
});