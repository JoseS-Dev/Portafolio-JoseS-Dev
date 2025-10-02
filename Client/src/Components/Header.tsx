import { ListLinks } from "../Ui/ListNav"

export function Header(){
    return (
        <header className="w-full h-22 flex justify-between items-center  
        border-b-2 border-blue-500">
            <article className="w-1/5 h-full px-5 flex items-center">
                <h1 className="text-3xl tracking-normal italic">JoseS-Dev</h1>
            </article>
            <nav className="w-4/5 h-full">
                <ul className="w-full h-full flex items-center justify-around">
                    {ListLinks.map((link, index) => (
                        <li key={index} className="w-1/4 h-11/12 border-r-2 border-gray-700 
                        flex items-center justify-center text-xl tracking-normal cursor-pointer
                        hover:text-blue-600 hover:underline hover:scale-95 transition-transform
                        duration-300 italic">
                            {link}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}