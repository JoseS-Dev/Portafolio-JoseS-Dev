import { paragraphsSections, titlesSections } from "../Ui/Ui"
export function About(){
    return (
        <section id="Sobre Mi" className="w-full h-135 p-4 
        flex flex-col items-center border-b-2 border-blue-500">
            <article className="w-full min-h-full flex flex-col items-center gap-1.5 p-2">
                <h2 className="text-3xl px-2 font-semibold italic w-full border-b-2 border-blue-600">
                    {titlesSections.About}
                </h2>
                <div className="w-full h-11/12 flex">
                    <div className="w-3/5 h-full flex flex-col items-center 
                    text-justify p-4 gap-2">
                        <p className="text-xl tracking-tight first-letter:text-2xl 
                        first-letter:text-blue-700">
                            {paragraphsSections.About.paragraph_inicial}
                        </p>
                        <p className="text-xl tracking-tight">
                            {paragraphsSections.About.paragraphy_medio}
                        </p>
                    </div>
                    <div className="w-2/5 h-full flex flex-col items-center justify-center">
                        <figure className="w-full h-full p-5 rounded-2xl">
                            <img alt="AboutMe-Image" src="../../public/About-me.png"
                            className="object-fill w-full h-full rounded-2xl" />
                        </figure>
                    </div>
                </div>
            </article>
        </section>
    )
}