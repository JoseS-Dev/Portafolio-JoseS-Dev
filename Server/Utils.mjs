// Configuraciones para el transporte de emails
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

export const transporter = createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    secure: false,
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});