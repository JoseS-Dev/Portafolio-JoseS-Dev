const STRONG_HOME = () => <strong className='text-blue-500'>Programador Full-Stack</strong>
// Lista de titulos de las secciones
export const titlesSections = {
    Home: () => <>JoseS-Dev - <STRONG_HOME /></>,
    About: 'Hablemos de mi'
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
    }
}