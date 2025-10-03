import { ListSocialMedia } from "../Ui/ListSocialMedia"
import { myData } from "../Ui/Ui"
export function Contact(){
    return (
        <section id="Contacto" className="w-full h-145 flex
        gap-2.5 p-4">
            <article className="w-3/5 h-full p-3">
                <form className="w-full h-full flex flex-col items-center gap-1.5">
                    <h2 className="text-3xl border-b-2 border-blue-500 w-full
                    tracking-tighter italic">
                        Deja tu comentario
                    </h2>
                    <div className="w-full h-1/4 border-b-2 border-blue-500 flex items-center gap-1.5 p-2">
                        <div className="w-1/2 h-full flex flex-col items-center p-1.5">
                            <label className="text-xl tracking-tighter w-full border-b-2 
                            border-blue-500">Nombre</label>
                            <input 
                                type="text" 
                                className="w-full h-16 border-2 border-l-0 border-blue-500 p-1
                                text-lg tracking-tighter italic placeholder:italic
                                placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe tu nombre" 
                            />
                        </div>
                        <div className="w-1/2 h-full flex flex-col items-center p-1.5">
                            <label className="text-xl tracking-tighter w-full border-b-2 
                            border-blue-500">Apellido</label>
                            <input 
                                type="text" 
                                className="w-full h-16 border-2 border-l-0 border-blue-500 p-1
                                text-lg tracking-tighter italic placeholder:italic
                                placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe tu apellido" 
                            />
                        </div>
                    </div>
                    <div className="w-full h-1/4 border-b-2 border-blue-500 flex items-center p-2">
                        <div className="w-1/2 h-full flex flex-col items-center p-1.5">
                            <label className="text-xl tracking-tighter w-full border-b-2 
                            border-blue-500">Correo</label>
                            <input 
                                type="text" 
                                className="w-full h-16 border-2 border-l-0 border-blue-500 p-1
                                text-lg tracking-tighter italic placeholder:italic
                                placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe tu correo" 
                            />
                        </div>
                        <div className="w-1/2 h-full flex flex-col items-center p-1.5">
                            <label className="text-xl tracking-tighter w-full border-b-2 
                            border-blue-500">Número de teléfono</label>
                            <input 
                                type="text" 
                                className="w-full h-16 border-2 border-l-0 border-blue-500 p-1
                                text-lg tracking-tighter italic placeholder:italic
                                placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe tu número de teléfono" 
                            />
                        </div>
                    </div>
                    <div className="w-full h-2/5 flex items-center p-2">
                        <div className="w-1/2 h-full flex flex-col items-center p-1.5">
                            <label className="text-xl tracking-tighter w-full border-b-2 
                            border-blue-500">Asunto</label>
                            <textarea 
                                className="w-full h-32 border-2 border-l-0 border-blue-500 p-1
                                text-lg tracking-tighter italic placeholder:italic 
                                placeholder:text-gray-500 focus:outline-none focus:border-blue-700"
                                placeholder="Escribe el asunto"
                            ></textarea>
                        </div>
                        <div className="w-1/2 h-full flex flex-col items-center justify-center">
                            <button className="w-3/5 h-16 bg-blue-600 text-white
                            text-xl tracking-tighter font-semibold rounded-2xl cursor-pointer
                            hover:bg-blue-700 hover:scale-95 transition-transform duration-300">
                                Enviar comentario
                            </button>
                        </div>
                    </div>
                </form>
            </article>
            <article className="w-2/5 h-full border-l-2 border-blue-500 p-3 
            flex flex-col items-center gap-2.5">
                <div className="w-full h-1/4 flex flex-col items-center gap-1.5
                border-b-2 border-gray-600 p-1">
                    <h2 className="w-full text-3xl tracking-tighter italic 
                    border-b-2 border-blue-500">Contacto</h2>
                    <p className="p-2 h-auto text-xl tracking-tighter 
                    first-letter:text-xl first-letter:text-blue-500">
                        Si deseas ponerte en contacto conmigo, no dudes en enviarme un correo electrónico 
                        o llamarme. Estoy abierto a nuevas oportunidades y colaboraciones.
                    </p>
                </div>
                <div className="w-full h-3/4 flex flex-col items-center gap-2 p-2">
                    <div className="w-full h-2/5 items-center flex 
                    flex-col gap-2 p-1.5">
                        <span className="w-full text-xl border-b-2 
                        border-blue-500 px-1.5 flex gap-3.5">
                            Mi número de telefono es: 
                            <strong className="text-blue-500 italic">{myData.Phone}</strong>
                        </span>
                        <span className="w-full border-b-2 border-blue-500 
                        text-xl flex gap-3.5 px-1.5">
                            Mi correo electronico es:
                            <strong className="text-blue-500 italic">{myData.Emails.Principal}</strong>
                        </span>
                        <span className="w-full text-xl border-b-2 border-blue-500 px-1.5 
                        flex gap-3.5">
                            Mi correo alternativo es:
                            <strong className="text-blue-500 italic">{myData.Emails.Alternativo}</strong>
                        </span>
                    </div>
                    <div className="w-full h-4/5 p-2 flex flex-col gap-1.5">
                        <h4 className="text-2xl tracking-tighter border-b-2 border-blue-500 italic">
                            Mis redes Sociales
                        </h4>
                        <ul className="list-none w-full h-11/12 flex items-center justify-evenly gap-1.5 p-1">
                            {ListSocialMedia.map((social, index) => (
                                <li key={index} 
                                className="w-1/4 h-4/5 flex-col items-center flex 
                                justify-center gap-1.5">
                                    <a href={social.link} target="_blank" rel="noopener noreferrer"
                                    className="w-full h-full flex flex-col items-center 
                                    justify-center gap-1.5 hover:scale-95 hover:bg-black 
                                    transition-transform duration-300 p-1.5 rounded-lg">
                                        {social.Icon}
                                        <span className="text-blue-500 italic text-lg">{social.name}</span>
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