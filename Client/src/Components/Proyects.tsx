import { ListProyects } from "../Ui/ListProyectos"

export function Proyectos() {
    return (
        <section id="Proyectos" className="w-full min-h-[40rem] flex flex-col items-center p-2 md:p-4 border-b-2 border-blue-500 gap-2">
            <article className="w-full flex flex-col p-2 items-center gap-1.5">
                <h2 className="text-2xl md:text-3xl font-semibold italic border-b-2 w-full border-blue-500 text-center md:text-left">Mis Proyectos</h2>
                <p className="text-base md:text-xl tracking-tighter px-2 first-letter:text-2xl first-letter:text-blue-700 text-center md:text-left">
                    A continuación les muestreo una colección de implementaciones prácticas que han servido como campo de entrenamiento para consolidar y expandir mis conocimientos de programación. Estos proyectos reflejan mi crecimiento y capacidad para entregar soluciones funcionales. Los cuales son los siguientes:
                </p>
            </article>
            <article className="w-full flex flex-col items-center">
                <div className="w-full flex flex-wrap justify-center md:justify-evenly gap-4 md:gap-3 p-1 md:p-2 overflow-auto">
                    {ListProyects.map((proyect, index) => (
                        <a
                            href={proyect.LinkRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="w-full sm:w-3/4 md:w-2/5 lg:w-1/4 xl:w-1/4 h-auto rounded-2xl border-2 border-gray-600 flex cursor-pointer flex-col items-center p-3 hover:scale-95 transition-transform duration-300 bg-gray-950"
                        >
                            <figure className="w-full h-40 md:h-48 border-b-2 border-blue-500 p-1.5 rounded-xl">
                                <img alt={proyect.titleApp} src={proyect.ImageURl} className="w-full h-full object-fill opacity-55 rounded-xl" />
                            </figure>
                            <div className="w-full flex flex-col p-2 gap-1">
                                <h4 className="text-lg md:text-xl font-semibold italic w-full border-b-2 border-gray-600">{proyect.titleApp}</h4>
                                <span className="text-base md:text-lg flex gap-3">Estado del proyecto: <strong className="text-blue-500 italic">{proyect.status}</strong></span>
                                <ul className="list-none w-full flex gap-1 flex-wrap justify-evenly">
                                    {proyect.tecnologies.map((tec, index) => (
                                        <li key={index} className="text-sm md:text-lg tracking-tighter w-auto h-7 p-1 border-gray-600 bg-gray-900 flex items-center justify-center italic font-semibold">{tec}</li>
                                    ))}
                                </ul>
                                <div className="w-full flex flex-col items-center">
                                    <h4 className="text-base md:text-lg font-semibold italic w-full border-b-2 border-gray-600">Descripción del Proyecto</h4>
                                    <p className="text-sm md:text-md tracking-tighter w-full h-auto p-1 border-gray-600 first-letter:text-blue-500 first-letter:text-lg">
                                        {proyect.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </article>
        </section>
    )
}