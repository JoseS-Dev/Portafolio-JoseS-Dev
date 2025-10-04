import { validateContact } from "../Validation/SchemaContact.mjs";
import { transporter } from "../Utils.mjs";
import dotenv from 'dotenv';

dotenv.config();

export class SendEmail {
    sendEmail = (req, res) => {
        const result = validateContact(req.body);
        try{
            if(!result.success) return res.status(400).json(
                {error: result.error.errors}
            )
            // Configuración del email
            const mailOptions = {
                from: `${result.data.email_contact}`,
                to: process.env.EMAIL_USER,
                subject: `Han recibido un comentario de ${result.data.name_contact} 
                ${result.data.last_name_contact} desde Portafolio-JoseS-Dev`,
                html: `
                    <h1>Detalles del contacto</h1>
                    <ul>
                        <li><strong>Nombre:</strong> ${result.data.name_contact} 
                        ${result.data.last_name_contact}</li>
                        <li><strong>Email:</strong> ${result.data.email_contact}</li>
                        <li><strong>Teléfono:</strong> ${result.data.phone_contact}</li>
                    </ul>
                    <h2>Mensaje:</h2>
                    <p>${result.data.message_contact}</p>
                `
            };
            // Enviar el email
            transporter.sendMail(mailOptions, (err, info) => {
                if(err) return res.status(500).json({error: 'Error al enviar el email'});
                return res.status(200).json({message: 'Email enviado correctamente'});
            })
        }
        catch(error){
            return res.status(500).json({error: 'Error en el servidor'});
        }
    }
}




