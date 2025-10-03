import { ListProyects } from "../Ui/ListProyectos"

export function Proyectos(){
    return (
        <section id="Proyectos" className="w-full h-200 flex flex-col items-center p-4
        border-b-2 border-blue-500 gap-2">
            <article className="w-full h-1/6 flex flex-col p-2 items-center gap-1.5 ">
                <h2 className="text-3xl font-semibold italic border-b-2 w-full
                border-blue-500">Mis Proyectos</h2>
                <p className="text-xl tracking-tighter px-2 first-letter:text-2xl 
                first-letter:text-blue-700">
                    A continuación les muestreo una colección de implementaciones prácticas que han servido 
                    como campo de entrenamiento para consolidar y expandir mis conocimientos de programación. 
                    Estos proyectos reflejan mi crecimiento y capacidad para entregar soluciones funcionales.
                    Los cuales son los siguientes:
                </p>
            </article>
            <article className="w-full h-10/12 flex flex-col items-center">
                <div className="w-full h-full flex flex-wrap justify-evenly
                gap-3 p-2 overflow-auto">
                    {ListProyects.map((proyect, index) => (
                        <a href={proyect.LinkRepo} target="_blank" rel="noopener noreferrer" 
                        key={index} className="w-3/10 h-4/5 rounded-2xl border-2 border-gray-600 
                        flex cursor-pointer flex-col items-center p-3 hover:scale-95 
                        transition-transform duration-300">
                            <figure className="w-full h-1/2 border-b-2 border-blue-500 p-1.5 
                            rounded-xl">
                                <img alt="Proyecto 1" src={proyect.ImageURl} 
                                className="w-full h-full object-fill opacity-55 rounded-xl"/>
                            </figure>
                            <div className="w-full h-1/2 flex flex-col
                            p-2 gap-1">
                                <h4 className="text-xl font-semibold italic w-full 
                                border-b-2 border-gray-600">{proyect.titleApp}</h4>
                                <span className="text-lg flex gap-3">Estado del proyecto: 
                                    <strong className="text-blue-500 italic">{proyect.status}</strong>
                                </span>
                                <ul className="list-none w-full h-auto flex gap-1 flex-wrap justify-evenly">
                                    {proyect.tecnologies.map((tec, index) => (
                                        <li key={index} className="text-lg tracking-tighter w-auto h-7 p-1 
                                        border-gray-600 bg-gray-900 flex items-center justify-center italic font-semibold">{tec}</li>
                                    ))}
                                </ul>
                                <div className="w-full h-auto flex flex-col items-center">
                                    <h4 className="text-lg font-semibold italic w-full 
                                    border-b-2 border-gray-600">Descripción del Proyecto</h4>
                                    <p className="text-md tracking-tighter w-full h-auto p-1 
                                    border-gray-600 first-letter:text-blue-500 first-letter:text-lg">
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