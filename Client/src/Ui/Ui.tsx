const STRONG_HOME = () => <strong className='text-blue-500'>Programador Full-Stack Jr</strong>
// Lista de titulos de las secciones
export const titlesSections = {
    Home: () => <>JoseS-Dev - <STRONG_HOME /></>,
    About: 'Hablemos de mi',
    Skills: 'Mis Skills'
}

// Lista de parrafos de las secciones
export const paragraphsSections = {
    Home: `
        Programador apasionado con un enfoque innovador y compromiso social. Combinó mi habilidad
        técnica en desarrollo de software con creatividad para diseñar soluciones eficientes y centradas en el
        usuario. Disfruto trabajar en equipo, aportando ideas frescas y colaborando en proyectos con
        impacto positivo. Mi objetivo es aplicar mi conocimiento en tecnología para crear herramientas que
        faciliten procesos y contribuyan al bienestar colectivo.
    `,
    About: {
        paragraph_inicial: `
            Hola, soy JoséS-Dev, un programador full-stack con dos años de experiencia dedicado a la tecnología y la innovación. 
            Mi pasión se centra en crear soluciones eficientes y centradas en el usuario. 
            A lo largo de mi trayectoria, he tenido la oportunidad de colaborar en diversos proyectos, 
            lo que me ha permitido desarrollar y fortalecer mis habilidades tanto en el frontend como en el backend.
        `,
        paragraphy_medio: `
            Me entusiasma profundamente la programación; la considero un motor para resolver problemas complejos y materializar ideas innovadoras. 
            Actualmente, me encuentro cursando los últimos semestres de mi carrera de Ingeniería de Computación, 
            lo que complementa mi experiencia práctica con una sólida base teórica, preparándome para abordar los desafíos más grandes en el mundo del desarrollo de software.
        `
    },
    Skill: `
        A continuación se muestra algunas de las tecnologias y herramientas donde
        tengo Experiencia demostrada en el diseño y la implementación de soluciones de software, 
        con un profundo conocimiento de todo el stack de desarrollo. 
        Mi expertise abarca el frontend, backend y la gestión de bases de datos, 
        asegurando la creación de sistemas integrales y eficientes. las cuales son las siguientes:
    `
}

// Lista de mis datos personales
export const myData = {
    'Phone': '+58 414-4204521',
    'Emails': {
        'Principal': 'joseasantana05@gmail.com',
        'Alternativo': 'josantana22@ujap.edu.ve'
    } 
}