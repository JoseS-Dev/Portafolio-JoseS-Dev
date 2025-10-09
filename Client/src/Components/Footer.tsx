import { useHookAnimation } from "../Hooks/AnimationHook"
export function Footer() {
    const {sectionref, isVisible} = useHookAnimation();
    return (
        <footer ref={sectionref} className="w-full min-h-20 flex flex-col md:flex-row items-center justify-between px-2.5 py-4 border-t-2 border-blue-500 gap-2 md:gap-0">
            <div className={`w-full flex flex-col md:flex-row justify-between items-center px-3 ${isVisible ? 'animation' : ''}`}>
                <span className="text-base sm:text-lg md:text-xl italic tracking-tighter text-center md:text-left">Desarrollado por JoseS-Dev</span>
                <span className="text-base sm:text-lg md:text-xl italic tracking-tighter text-center md:text-right">2025 © Todos los derechos reservados</span>
            </div>
        </footer>
    )
}