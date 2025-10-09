import { ListSkills } from '../Ui/ListSkills';
import { paragraphsSections, titlesSections } from '../Ui/Ui';
import { useHookAnimation } from '../Hooks/AnimationHook';
export function Skills() {
    const {sectionref, isVisible} = useHookAnimation();
    return (
        <section ref={sectionref} id="Skills" className="w-full min-h-[32rem] p-2 md:p-4 border-b-2 border-blue-500 flex flex-col items-center gap-2">
            <article className={`w-full flex flex-col items-center gap-1.5 p-2 scroll-animate ${isVisible ? 'animation' : ''}`}>
                <h2 className="text-2xl md:text-3xl font-semibold italic w-full border-b-2 border-blue-500 px-2 text-center md:text-left">
                    {titlesSections.Skills}
                </h2>
                <p className="text-base md:text-xl tracking-tighter first-letter:text-2xl first-letter:text-blue-700 px-2 text-center md:text-left">
                    {paragraphsSections.Skill}
                </p>
            </article>
            <article className={`w-full flex flex-col items-center scroll-animate ${isVisible ? 'animation' : ''}`}>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 p-1 md:p-2">
                    {ListSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="border-2 border-gray-500 flex flex-col items-center gap-2.5 rounded-2xl p-3 hover:scale-95 hover:bg-black transition-transform duration-300 bg-gray-950"
                        >
                            <div className="w-full h-11 border-b-2 border-blue-700 flex items-center justify-between px-2 rounded-xl">
                                <h3 className="text-lg md:text-xl">{skill.category}</h3>
                                <skill.Icon />
                            </div>
                            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-1.5 p-1.5 px-3">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="w-auto h-10 border-2 border-blue-400 text-sm md:text-lg tracking-tighter font-semibold italic p-1 rounded-xl text-center bg-gray-900 hover:scale-95 hover:bg-blue-900 transition-transform"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
}