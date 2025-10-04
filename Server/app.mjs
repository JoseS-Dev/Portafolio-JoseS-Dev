import express, {json} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { RouteEmail } from './Route/RouteEmail.mjs';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(cors({
    origin: '*',
    credentials: true
}));

// Rutas
app.use('/api-send', RouteEmail);
app.get('/', (req, res) => {
    res.json('Hola Mundo desde el servidor de Portafolio-JoseS-Dev');
})

// Escuchamos al servidor
export default app;