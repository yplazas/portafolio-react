import { v4 as uuidv4 } from "uuid";

const tegnologias = [
  {
    id: uuidv4(),
    nombre: "GIT",
    porcentaje: "70%",
    image: "img/logos/git.svg",
    imageDark: ""
  },
  {
    id: uuidv4(),
    nombre: "GitHub",
    porcentaje: "70%",
    image: "img/logos/github.svg",
    imageDark: "img/logos/github-dark.svg"
  },

  {
    id: uuidv4(),
    nombre: "HTML",
    porcentaje: "70%",
    image: "img/logos/html.svg",
    imageDark: ""
  },
  {
    id: uuidv4(),
    nombre: "CSS",
    porcentaje: "70%",
    image: "img/logos/css.svg",
    imageDark: ""
  },
  {
    id: uuidv4(),
    nombre: "JavaScript",
    porcentaje: "60%",
    image: "img/logos/javascript.svg",
    imageDark: ""
  },
  {
    id: uuidv4(),
    nombre: "TypeScript",
    porcentaje: "50%",
    image: "img/logos/typescript.svg",
    imageDark: ""
  },
  {
    id: uuidv4(),
    nombre: "Node JS",
    porcentaje: "50%",
    image: "img/logos/nodejs.svg",
    imageDark: ""
  },
  {
    id: uuidv4(),
    nombre: "React",
    porcentaje: "40%",
    image: "img/logos/react.svg",
    imageDark: ""
  },
  {
    id: uuidv4(),
    nombre: "Tailwind CSS",
    porcentaje: "40%",
    image: "img/logos/tailwindcss.svg",
    imageDark: ""
  },
];

const idiomas = [
  {
    id: uuidv4(),
    nombre: "Español",
    porcentaje: "100%",
  },
  {
    id: uuidv4(),
    nombre: "Ingles",
    porcentaje: "30%",
  },
];

const skills = [
  {
    id: uuidv4(),
    nombre: "Desarrollo Frontend",
    porcentaje: "60%",
  },
  {
    id: uuidv4(),
    nombre: "Diseño UI/UX",
    porcentaje: "30%",
  },
]

const estudios = [
  {
    id: uuidv4(),
    titulo: "Cursos Online",
    institucion: "Udemy",
    duracion: "2024-2025",
    url: "https://www.udemy.com/",
    imagen: "img/schools/udemy.png",
  },
  {
    id: uuidv4(),
    titulo: "Cursos Online",
    institucion: "Platzi",
    duracion: "2022-2024",
    url: "https://platzi.com/",
    imagen: "img/schools/platzi.png",
  },
  {
    id: uuidv4(),
    titulo: "Cursos Online",
    institucion: "Alura Latam + Oracle",
    duracion: "2024",
    url: "https://app.aluracursos.com/",
    imagen: "img/schools/aluraOracle.png",
  },
  {
    id: uuidv4(),
    titulo: "Ingeniería de sistemas",
    institucion: "Universidad de la Guajira",
    duracion: "2014-2019",
    url: "https://uniguajira.edu.co/",
    imagen: "img/schools/uniguajira.png",
  },
];

const certificados = [
  {
    id: uuidv4(),
    titulo: "Curso Universidad Desarrollo Web - FrontEnd Web Developer",
    institucion: "Udemy",
    credencial:
      "https://www.udemy.com/certificate/UC-895f2ce8-66e0-4b6f-94e1-29e515d4a3f8",
    imagen: "img/certificates/universidad-frontend.jpg",
  },
  {
    id: uuidv4(),
    titulo: "Curso Programación para principiantes - Primeros pasos",
    institucion: "Udemy",
    credencial: "https://ude.my/UC-71a7d37e-d7f1-49ad-8b3e-9d70eb8c7f5e",
    imagen: "img/certificates/proPrimPasos.jpg",
  },
  {
    id: uuidv4(),
    titulo: "Curso Básico de JavaScript",
    institucion: "Platzi",
    credencial:
      "https://platzi.com/p/YeiAleXP/curso/1814-basico-javascript/diploma/detalle/",
    imagen: "img/certificates/javascriptPlatzi.png",
  },
  {
    id: uuidv4(),
    titulo: "Curso Fundamentos de Node js",
    institucion: "Platzi",
    credencial:
      "https://platzi.com/p/YeiAleXP/curso/1759-fundamentos-node/diploma/detalle/",
    imagen: "img/certificates/fundNode.png",
  },
  {
    id: uuidv4(),
    titulo: "Curso de Introducción al Desarrollo Backend 2023",
    institucion: "Platzi",
    credencial:
      "https://platzi.com/p/YeiAleXP/curso/4656-backend/diploma/detalle/",
    imagen: "img/certificates/intBacken2023.png",
  },
  {
    id: uuidv4(),
    titulo: "Curso de Introducción al Desarrollo Backend 2022",
    institucion: "Platzi",
    credencial:
      "https://platzi.com/p/YeiAleXP/curso/2508-backend-introduccion/diploma/detalle/",
    imagen: "img/certificates/intBacken2022.png",
  },
  {
    id: uuidv4(),
    titulo: "LÓGICA DE PROGRAMACIÓN: SUMÉRGETE EN LA PROGRAMACIÓN CON JAVASCRIPT",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/863e615d-6b53-43b5-ba9f-ea45ebf60052?lang",
    imagen: "img/certificates/logicaProgr.png",
  },
  {
    id: uuidv4(),
    titulo: "LÓGICA DE PROGRAMACIÓN: EXPLORAR FUNCIONES Y LISTAS",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/226350d8-957a-4c65-bd47-b315e6b33a2c?lang",
    imagen: "img/certificates/logicaProgrFunciones.png",
  },
  {
    id: uuidv4(),
    titulo: "GIT Y GITHUB: REPOSITORIO, COMMIT Y VERSIONES",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/f7f0578e-55a7-44ab-9bbb-a08e188a8c61",
    imagen: "img/certificates/github.png",
  },
  {
    id: uuidv4(),
    titulo: "HTML Y CSS: AMBIENTES DE DESARROLLO, ESTRUCTURA DE ARCHIVOS Y TAGS",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/f95892b4-09f3-4887-b103-f5f2ebdc30c7?lang",
    imagen: "img/certificates/html1.png",
    fechaFinalizacion: "11/07/2024"
  },
  {
    id: uuidv4(),
    titulo: "HTML Y CSS: HEADER, FOOTER Y VARIABLES CSS",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/18063ee5-709a-4725-981c-51f488da2109?lang",
    imagen: "img/certificates/html2.png",
    fechaFinalizacion: "23/07/2024"
  },
  {
    id: uuidv4(),
    titulo: "HTML Y CSS: CLASES, POSICIONAMIENTO Y FLEXBOX",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/ad1a5f8f-cbd6-43cf-bd6b-30ff60f270d8?lang",
    imagen: "img/certificates/html3.png",
    fechaFinalizacion: "16/07/2024"
  },
  {
    id: uuidv4(),
    titulo: "HTML Y CSS: TRABAJANDO CON RESPONSIVIDAD Y PUBLICACIÓN DE PROYECTOS",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/ea025920-ff46-44e6-91cd-88b7e0ece61c?lang",
    imagen: "img/certificates/html4.png",
    fechaFinalizacion: "24/07/2024"
  },
  {
    id: uuidv4(),
    titulo: "CSS: FLEXBOX Y LAYOUTS RESPONSIVOS",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/5e0b4927-9c68-4059-bd11-6f18f69cf3f1",
    imagen: "img/certificates/css.png",
    fechaFinalizacion: "25/09/2024"
  },
  {
    id: uuidv4(),
    titulo: "JAVASCRIPT PARA WEB: CREA PÁGINAS DINÁMICAS",
    institucion: "Alura Latam + Oracle",
    credencial:
      "https://app.aluracursos.com/certificate/51039e8d-327a-458e-a0b2-1988bb66c530",
    imagen: "img/certificates/javascript.png",
    fechaFinalizacion: "07/10/2024"
  },


];

const proyectos = [
  {
    id: uuidv4(),
    titulo: "Alura Geek",
    descripcion:
      "Este proyecto simula el funcionamiento de una tienda virtual, permitiendo a los usuarios visualizar una lista de productos, agregar nuevos productos y eliminar los existentes.En su desarrollo se implementaron diversas técnicas fundamentales de desarrollo web, utilizando HTML, CSS y JavaScript.",
    urlGitHub: "https://github.com/yplazas/Alura-geek.git",
    urlDemo: "https://github.com/yplazas/Alura-geek.git",
    imagen: "img/projects/aluraGeek.png",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: uuidv4(),
    titulo: "Alura Geek",
    descripcion:
      "Este proyecto simula el funcionamiento de una tienda virtual, permitiendo a los usuarios visualizar una lista de productos, agregar nuevos productos y eliminar los existentes.En su desarrollo se implementaron diversas técnicas fundamentales de desarrollo web, utilizando HTML, CSS y JavaScript.",
    urlGitHub: "https://github.com/yplazas/Alura-geek.git",
    urlDemo: "",
    imagen: "img/projects/aluraGeek.png",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: uuidv4(),
    titulo: "Alura Geek",
    descripcion:
      "Este proyecto simula el funcionamiento de una tienda virtual, permitiendo a los usuarios visualizar una lista de productos, agregar nuevos productos y eliminar los existentes.En su desarrollo se implementaron diversas técnicas fundamentales de desarrollo web, utilizando HTML, CSS y JavaScript.",
    urlGitHub: "https://github.com/yplazas/Alura-geek.git",
    urlDemo: "",
    imagen: "img/projects/aluraGeek.png",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: uuidv4(),
    titulo: "Alura Geek",
    descripcion:
      "Este proyecto simula el funcionamiento de una tienda virtual, permitiendo a los usuarios visualizar una lista de productos, agregar nuevos productos y eliminar los existentes.En su desarrollo se implementaron diversas técnicas fundamentales de desarrollo web, utilizando HTML, CSS y JavaScript.",
    urlGitHub: "https://github.com/yplazas/Alura-geek.git",
    urlDemo: "",
    imagen: "img/projects/aluraGeek.png",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: uuidv4(),
    titulo: "Alura Geek",
    descripcion:
      "Este proyecto simula el funcionamiento de una tienda virtual, permitiendo a los usuarios visualizar una lista de productos, agregar nuevos productos y eliminar los existentes.En su desarrollo se implementaron diversas técnicas fundamentales de desarrollo web, utilizando HTML, CSS y JavaScript.",
    urlGitHub: "https://github.com/yplazas/Alura-geek.git",
    urlDemo: "",
    imagen: "img/projects/aluraGeek.png",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
];

export { tegnologias, idiomas, skills, estudios, certificados, proyectos };
