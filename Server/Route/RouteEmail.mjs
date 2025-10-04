import {Router} from 'express';
import { SendEmail } from '../Controller/SendEmail.mjs';

const router = Router();
export const RouteEmail = router;

// Ruta de email
router.post('/email', SendEmail.prototype.sendEmail);
