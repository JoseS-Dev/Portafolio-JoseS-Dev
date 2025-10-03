import { ListSkills } from '../Ui/ListSkills';
export function Skills(){
    return (
        <section id="Skills" className="w-full h-screen p-4 flex flex-col items-center gap-2">
            <article className="w-full h-1/6 px-2 flex flex-col items-center 
            gap-1.5 p-2">
                <h2 className="text-3xl font-semibold italic w-full 
                border-b-2 border-blue-500 px-2">
                    Mis Skills
                </h2>
                <p className="text-xl tracking-tighter first-letter:text-2xl first-letter:text-blue-700 px-2">
                    A continuación se muestra algunas de las tecnologias y herramientas donde
                    tengo Experiencia demostrada en el diseño y la implementación de soluciones de software, 
                    con un profundo conocimiento de todo el stack de desarrollo. 
                    Mi expertise abarca el frontend, backend y la gestión de bases de datos, 
                    asegurando la creación de sistemas integrales y eficientes. las cuales son las siguientes:
                </p>
            </article>
            <article className="w-full h-10/12 flex flex-col items-center">
                <div className="w-full h-full flex flex-wrap justify-evenly gap-3 p-2 overflow-auto">
                    {ListSkills.map((skill, index) => (
                        <div key={index} className="border-2 
                        border-gray-500 w-3/10 h-auto  flex flex-col 
                        items-center gap-2.5 rounded-2xl p-3 hover:scale-95
                        hover:bg-black transition-transform duration-300">
                            <div className="w-full h-11 border-b-2 border-blue-700 flex 
                            items-center justify-between px-2 rounded-xl">
                                <h3 className="text-xl">{skill.category}</h3>
                                <skill.Icon/>
                            </div>
                            <div className='w-full h-11/12 flex 
                            flex-wrap justify-start gap-2 p-1.5 px-3'>
                                {skill.items.map((item, idx) => (
                                    <span key={idx} className='min-w-auto h-10 border-2 border-blue-400 
                                    text-lg tracking-tighter font-semibold italic p-1 rounded-xl 
                                    text-center bg-gray-900 hover:scale-95 hover:bg-blue-900 transition-transform'>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}