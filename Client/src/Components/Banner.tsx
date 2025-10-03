import { titlesSections, paragraphsSections } from "../Ui/Ui"

export function Banner() {
    return (
        <section className="w-full min-h-[28rem] md:min-h-screen relative flex flex-col md:flex-row items-center justify-evenly border-b-2 border-blue-500 px-2 md:px-0 py-4 md:py-0 gap-6 md:gap-0">
            <article className="w-full md:w-3/5 flex flex-col items-center justify-center p-2 md:p-3">
                <div className="w-full flex flex-col justify-center gap-2 md:gap-1.5 px-2 md:px-7 mb-4 md:mb-12 md:ml-6">
                    <h2 className="text-3xl md:text-5xl text-center md:text-left">
                        {titlesSections.Home()}
                    </h2>
                    <p className="text-base md:text-xl text-gray-100 w-full md:w-11/12 tracking-tighter first-letter:text-blue-700 first-letter:text-2xl text-center md:text-left">
                        {paragraphsSections.Home}
                    </p>
                </div>
            </article>
            <article className="w-full md:w-2/5 flex flex-col items-center justify-center">
                <figure className="w-48 h-48 md:w-2/3 md:h-3/4 shadow-lg/30 shadow-blue-600 rounded-full md:ml-12 bg-black hover:shadow-blue-700 hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center">
                    <img alt="JoseS-Dev" className="w-full h-full rounded-full object-fill opacity-55" src="/JoseS-Dev.jpg" />
                </figure>
            </article>
        </section>
    )
}