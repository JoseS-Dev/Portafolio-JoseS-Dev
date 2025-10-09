import { paragraphsSections, titlesSections } from "../Ui/Ui"
import { useHookAnimation } from "../Hooks/AnimationHook"
export function About() {
    const {sectionref, isVisible} = useHookAnimation();
    return (
        <section ref={sectionref} id="Sobre Mi" className="w-full min-h-[32rem] p-2 md:p-4 flex flex-col items-center border-b-2 border-blue-500">
            <article className={`w-full min-h-full flex flex-col items-center gap-1.5 p-2 scroll-animate ${isVisible ? 'animation' : ''}`}>
                <h2 className="text-2xl md:text-3xl px-2 font-semibold italic w-full border-b-2 border-blue-600 text-center md:text-left">
                    {titlesSections.About}
                </h2>
                <div className="w-full flex flex-col md:flex-row h-auto md:h-11/12">
                    <div className="w-full md:w-3/5 flex flex-col items-center text-justify p-2 md:p-4 gap-2">
                        <p className="text-base md:text-xl tracking-tight first-letter:text-2xl first-letter:text-blue-700">
                            {paragraphsSections.About.paragraph_inicial}
                        </p>
                        <p className="text-base md:text-xl tracking-tight">
                            {paragraphsSections.About.paragraphy_medio}
                        </p>
                    </div>
                    <div className="w-full md:w-2/5 flex flex-col items-center justify-center mt-4 md:mt-0">
                        <figure className="w-3/4 md:w-full h-48 md:h-full p-2 md:p-5 rounded-2xl">
                            <img alt="AboutMe-Image" src="/About-me.png" loading="lazy" className="object-fill w-full h-full rounded-2xl" />
                        </figure>
                    </div>
                </div>
            </article>
        </section>
    )
}