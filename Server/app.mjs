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
app.use('/', (req, res) => {
    res.send('API de envio de emails funcionando correctamente');
})

// Escuchamos al servidor
if(process.env.NODE_ENV !== 'production'){
    app.listen(process.env.PORT, () => {
        console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    });
}