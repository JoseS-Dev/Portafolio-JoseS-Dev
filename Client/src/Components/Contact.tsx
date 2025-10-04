import { ListSocialMedia } from "../Ui/ListSocialMedia"
import { myData } from "../Ui/Ui"
import { sendContactMail } from "../Services/ServicesMail";
import { useState } from "react"
import swal from 'sweetalert2'

export function Contact() {
    const [nameContact, setNameContact] = useState('');
    const [lastNameContact, setLastNameContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const [phoneContact, setPhoneContact] = useState('');
    const [messageContact, setMessageContact] = useState('');

    // Handle para mandar el formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!nameContact || !lastNameContact || !emailContact || !phoneContact || !messageContact){
            swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos del formulario.',
            })
        }
        const ContactForm = {
            name_contact: nameContact,
            last_name_contact: lastNameContact,
            email_contact: emailContact,
            phone_contact: phoneContact,
            message_contact: messageContact,
        }
        try {
            const response = await sendContactMail(ContactForm);
            if(response.error) swal.fire({
                icon: 'error',
                title: 'Error',
                text: `${response.message}`
            })
            else{
                swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'El correo se ha enviado correctamente.'
                })
            }
        }
        catch(error){
            swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
            })
        }
    }
    
    
    return (
        <section id="Contacto" className="w-full min-h-[36rem] flex flex-col lg:flex-row gap-4 p-2 md:p-4">
            <article className="w-full lg:w-3/5 h-full p-2 md:p-3">
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center gap-2">
                    <h2 className="text-2xl md:text-3xl border-b-2 border-blue-500 w-full tracking-tighter italic text-center md:text-left">
                        Deja tu comentario
                    </h2>
                    <div className="w-full border-b-2 border-blue-500 flex flex-col md:flex-row items-center gap-2 md:gap-1.5 p-2">
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-blue-500">Nombre</label>
                            <input
                                type="text"
                                className="w-full h-12 md:h-16 border-2 border-l-0 border-blue-500 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe tu nombre"
                                value={nameContact}
                                onChange={(e) => setNameContact(e.target.value)}
                                name="name_contact"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-blue-500">Apellido</label>
                            <input
                                type="text"
                                className="w-full h-12 md:h-16 border-2 border-l-0 border-blue-500 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe tu apellido"
                                value={lastNameContact}
                                onChange={(e) => setLastNameContact(e.target.value)}
                                name="last_name_contact"
                            />
                        </div>
                    </div>
                    <div className="w-full border-b-2 border-blue-500 flex flex-col md:flex-row items-center p-2 gap-2 md:gap-0">
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-blue-500">Correo</label>
                            <input
                                type="text"
                                className="w-full h-12 md:h-16 border-2 border-l-0 border-blue-500 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe tu correo"
                                value={emailContact}
                                onChange={(e) => setEmailContact(e.target.value)}
                                name="email_contact"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-blue-500">Número de teléfono</label>
                            <input
                                type="text"
                                className="w-full h-12 md:h-16 border-2 border-l-0 border-blue-500 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe tu número de teléfono"
                                value={phoneContact}
                                onChange={(e) => setPhoneContact(e.target.value)}
                                name="phone_contact"
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center p-2 gap-2 md:gap-0">
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-blue-500">Asunto</label>
                            <textarea
                                className="w-full h-24 md:h-32 border-2 border-l-0 border-blue-500 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe el asunto"
                                value={messageContact}
                                onChange={(e) => setMessageContact(e.target.value)}
                                name="message_contact"
                            ></textarea>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="w-3/5 h-12 sm:h-12 md:h-16 bg-blue-500 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </article>
            <article className="w-full lg:w-2/5 h-full border-t-2 lg:border-t-0 lg:border-l-2 border-blue-500 p-2 md:p-3 flex flex-col items-center gap-2.5">
                <div className="w-full flex flex-col items-center gap-1.5 border-b-2 border-gray-600 p-1">
                    <h2 className="w-full text-2xl md:text-3xl tracking-tighter italic border-b-2 border-blue-500 text-center md:text-left">Contacto</h2>
                    <p className="p-2 h-auto text-base md:text-xl tracking-tighter first-letter:text-xl first-letter:text-blue-500 text-center md:text-left">
                        Si deseas ponerte en contacto conmigo, no dudes en enviarme un correo electrónico o llamarme. Estoy abierto a nuevas oportunidades y colaboraciones.
                    </p>
                </div>
                <div className="w-full flex flex-col items-center gap-2 p-2">
                    <div className="w-full items-center flex flex-col gap-2 p-1.5">
                        <span className="w-full text-base md:text-xl border-b-2 border-blue-500 px-1.5 flex gap-3.5">
                            Mi número de telefono es:
                            <strong className="text-blue-500 italic">{myData.Phone}</strong>
                        </span>
                        <span className="w-full border-b-2 border-blue-500 text-base md:text-xl flex gap-3.5 px-1.5">
                            Mi correo electronico es:
                            <strong className="text-blue-500 italic">{myData.Emails.Principal}</strong>
                        </span>
                        <span className="w-full text-base md:text-xl border-b-2 border-blue-500 px-1.5 flex gap-3.5">
                            Mi correo alternativo es:
                            <strong className="text-blue-500 italic">{myData.Emails.Alternativo}</strong>
                        </span>
                    </div>
                    <div className="w-full p-2 flex flex-col gap-2.5">
                        <h4 className="text-lg md:text-2xl tracking-tighter border-b-2 border-blue-500 italic">Mis redes Sociales</h4>
                        <ul className="list-none w-full flex flex-wrap items-center justify-evenly gap-1.5 p-1">
                            {ListSocialMedia.map((social, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <a href={social.link} target="_blank" rel="noopener noreferrer"
                                        className="flex flex-col items-center gap-2 hover:text-blue-600 hover:scale-95 transition-transform duration-300">
                                        {social.Icon}
                                        <span className="text-base md:text-lg">{social.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    )
}