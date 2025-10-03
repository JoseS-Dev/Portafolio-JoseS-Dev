import { titlesSections, paragraphsSections } from "../Ui/Ui"

export function Banner(){
    return (
        <section className="w-full min-h-screen relative 
        flex items-center justify-evenly border-b-2 border-blue-500">
            <article className="w-3/5 h-full flex flex-col items-center 
            justify-center p-3">
                <div className="w-full h-2/3
                flex flex-col justify-center px-7 mb-12 ml-6 gap-1.5">
                    <h2 className="text-5xl">
                        {titlesSections.Home()}
                    </h2>
                    <p className="text-xl text-gray-100 w-11/12 tracking-tighter 
                    first-letter:text-blue-700 first-letter:text-2xl">
                        {paragraphsSections.Home}
                    </p>
                </div>
            </article>
            <article className="w-2/5 h-full flex flex-col items-center
            justify-center">
                <figure className="w-2/3 h-3/4 shadow-lg/30 shadow-blue-600 
                rounded-full ml-12 bg-black hover:shadow-blue-700 
                hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <img alt="JoseS-Dev" 
                    className="w-full h-full rounded-full opacity-55" 
                    src="../../public/JoseS-Dev.jpg"/>
                </figure>
            </article>
        </section>
    )
}