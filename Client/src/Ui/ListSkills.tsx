import { Palette, Cog, Database, ToolCase, BookCopy, Library } from "lucide-react"
// Lista de skills o habilidades
export const ListSkills = [
    {
        'category': 'Frontend',
        'Icon': () => <Palette className="text-blue-500"/>,
        'items': [
            'Vue.js',
            'React.js',
            'HTML5',
            'CSS3',
            'JavaScript',
            'TypeScript',
            'TailwindCss',
            'Bootstrap',
            'React-native'
        ]
    },
    {
        'category': 'Backend',
        'Icon': () => <Cog className="text-blue-500"/>,
        'items': [
            'Node.js',
            'Express.js',
            'Python'
        ]
    },
    {
        'category': 'Bases de Datos',
        'Icon': () => <Database className="text-blue-500"/>,
        'items': [
            'MySQL',
            'PostgreSQL',
            'MongoDB',
            'Superbase',
            'SQL Server'
        ]
    },
    {
        'category': 'Herramientas',
        'Icon': () => <ToolCase className="text-blue-500"/>,
        'items': [
            'Git',
            'GitHub',
            'GitLab',
            'Rest Client',
            'Figma',
            'VsCode',
            'Excel',
            'Power Point',
            'Word',
            'Canva',
            'Warp'
        ]
    },
    {
        'category': 'Terminos y metodologias',
        'Icon': () => <><BookCopy className="text-blue-500"/></>,
        'items': [
            'APIs REST',
            'Web Scapping',
            'POO',
            'MVC',
            'API',
            'ECMAScript',
            'MVP',
            'SCRUM',
            'SOLID',
            'M.Cascada',
            'Diseño Web',
            'D.Web',
            'P. Modular'
        ]
    },
    {
        'category': 'Aprendiendo',
        'Icon': () => <><Library className="text-blue-500"/></>,
        'items': [
            'laravel',
            'PHP',
            'Next.js',
            'Astro.js',
            'nestJS',
            'Java',
            '.net',
            'C #'
        ]
    }
]