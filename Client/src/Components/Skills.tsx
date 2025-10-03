import { ListSkills } from '../Ui/ListSkills';
import { paragraphsSections, titlesSections } from '../Ui/Ui';
export function Skills(){
    return (
        <section id="Skills" className="w-full h-screen p-4 border-b-2 border-blue-500 
        flex-col items-center gap-2">
            <article className="w-full h-1/6 px-2 flex flex-col items-center 
            gap-1.5 p-2">
                <h2 className="text-3xl font-semibold italic w-full 
                border-b-2 border-blue-500 px-2">
                    {titlesSections.Skills}
                </h2>
                <p className="text-xl tracking-tighter first-letter:text-2xl first-letter:text-blue-700 
                px-2">
                    {paragraphsSections.Skill}
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
                            <div className='w-full h-11/12 grid grid-cols-auto-fill gap-1.5 p-1.5 px-3'>
                                {skill.items.map((item, idx) => (
                                    <span key={idx} className='w-auto h-10 border-2 border-blue-400 
                                    text-lg tracking-tighter font-semibold italic p-1 rounded-xl 
                                    text-center bg-gray-900 hover:scale-95 hover:bg-blue-900 
                                    transition-transform'>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}