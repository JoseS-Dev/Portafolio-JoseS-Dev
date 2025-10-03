import { useState } from "react";
import { ListLinks } from "../Ui/ListNav";
import { HashLink as Link } from "react-router-hash-link";

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="w-full h-20 flex flex-col md:flex-row justify-between items-center border-b-2 border-blue-500 px-2 md:px-0 relative z-20 bg-black">
            <article className="w-full md:w-1/5 h-full px-5 flex items-center justify-between md:justify-start">
                <h1 className="text-2xl md:text-3xl tracking-normal italic">JoseS-Dev</h1>
                <button
                    className="md:hidden flex items-center justify-center p-2 focus:outline-none"
                    aria-label="Abrir menú"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </article>
            {/* Menú de navegación */}
            <nav className={`w-full md:w-4/5 h-auto md:h-full ${open ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center md:items-center justify-center md:justify-around bg-black md:bg-transparent absolute md:static top-20 left-0 md:top-0 md:left-0 transition-all duration-300`}> 
                <ul className="w-full md:w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-2 md:gap-0">
                    {ListLinks.map((link, index) => (
                        <li key={index} className="w-full md:w-1/4">
                            <Link
                                smooth
                                to={`#${link}`}
                                className="w-full h-12 md:h-11/12 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 flex items-center justify-center text-lg md:text-xl tracking-normal cursor-pointer hover:text-blue-600 hover:underline hover:scale-95 transition-transform duration-300 italic outline-none text-center"
                                onClick={() => setOpen(false)}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}