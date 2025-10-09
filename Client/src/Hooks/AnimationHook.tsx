import { useEffect, useRef, useState } from "react";
import { AnimateConfig } from "../Ui/Ui";

// Hook personalizado para manejar la animación al hacer scroll
export function useHookAnimation(){
    const[isVisible, setIsVisible] = useState(false);
    const sectionref = useRef<HTMLElement>(null);

    // Efecto para observar la visibilidad del elemento
    useEffect(() => {
        const element = sectionref.current;
        if(!element) return;
        // Observamos el elemento con IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(element); // Deja de observar una vez que es visible
                }
            })
        }, AnimateConfig);
        observer.observe(element);
        return () => {
            observer.disconnect(); // Limpieza del observer al desmontar el componente
        }
    }, [])

    // Efecto de animaciones para los hijos
    useEffect(() => {
        const elements = sectionref.current?.querySelectorAll('.scroll-animate');
        elements?.forEach((el) => {
            if(isVisible){
                el.classList.add('animation')
            }else{
                el.classList.remove('animation')
            }
        })
    }, [isVisible])

    return {isVisible, sectionref};
}