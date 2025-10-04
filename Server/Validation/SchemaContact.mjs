import zod from 'zod';

// Esquema para los datos de contacto
export const schemaContact = zod.object({
    name_contact: zod.string().min(2),
    last_name_contact: zod.string().min(2),
    email_contact: zod.string().email(),
    phone_contact: zod.string().min(7).max(15),
    message_contact: zod.string().min(10).max(500)
});

// Function para validar los datos de contacto
export function validateContact(data){
    return schemaContact.safeParse(data);
}