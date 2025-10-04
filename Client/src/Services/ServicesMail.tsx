import type { ContactData } from "../Interfaces/ContactData";

export async function sendContactMail(data: ContactData){
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api-send/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if(!response.ok) throw new Error('Error al enviar el correo');
        const result = await response.json();
        return result;
    }
    catch(error){
        console.error('Error al enviar el correo:', error);
        throw error;
    }
} 