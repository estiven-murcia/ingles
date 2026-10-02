const ES = {

"nav.home":"INICIO",

"nav.about":"SOBRE MÍ",

"nav.skills":"HABILIDADES",

"nav.resume":"FORMACIÓN",

"nav.portfolio":"PROYECTOS",

"nav.contact":"CONTACTO",

"hero.role":"Técnico Profesional en Programación Web · Desarrollador Web Junior",

"about.title":"Sobre Mí",

"about.text":"Soy estudiante de Técnico Profesional en Programación Web en la Institución Universitaria de El Espinal - UniEspinal. Tengo conocimientos básicos en HTML, JavaScript y Java, con interés en el desarrollo web y la creación de soluciones digitales. Actualmente busco fortalecer mis habilidades en programación y participar en proyectos tecnológicos.",

"about.infoTitle":"Información",

"about.labelLocation":"Ubicación",

"about.valueLocation":"Espinal, Tolima, Colombia",

"about.labelEmail":"Correo",

"about.labelLanguages":"Idiomas",

"about.valueLanguages":"Español (nativo) · Inglés básico",

"about.labelStatus":"Disponibilidad",

"about.valueStatus":"Abierto a prácticas",

"about.interestsTitle":"Intereses",

"interest.1":"CÓDIGO",

"interest.2":"DESARROLLO WEB",

"interest.3":"TECNOLOGÍA",

"interest.4":"APRENDIZAJE",

"skills.title":"Habilidades",

"skills.technical":"Habilidades técnicas",

"skills.professional":"Habilidades profesionales",

"skill.support":"Soporte al usuario",

"skill.teamwork":"Trabajo en equipo",

"skill.problem":"Resolución de problemas",

"skill.english":"Inglés técnico",

"resume.title":"Formación y experiencia",

"resume.education":"Formación",

"resume.experience":"Experiencia",

"edu.1.title":"Técnico Profesional en Programación Web",

"edu.1.text":"Formación en fundamentos de programación, desarrollo web y creación de páginas utilizando HTML, JavaScript y Java.",

"edu.2.title":"Fundamentos de Desarrollo Web",

"edu.2.text":"Aprendizaje de estructuras web, lógica de programación y herramientas digitales.",

"exp.1.title":"Desarrollo de proyectos académicos web",

"exp.1.text":"Participación en proyectos académicos aplicando conocimientos de HTML, JavaScript y Java para crear soluciones digitales.",

"exp.2.title":"Práctica personal de programación",

"exp.2.text":"Fortalecimiento continuo de habilidades mediante ejercicios de programación y desarrollo web.",

"portfolio.title":"Proyectos",

"project.1.title":"Proyecto Web Académico",

"project.1.text":"HTML, CSS y JavaScript",

"project.2.title":"Aplicación Básica en Java",

"project.2.text":"Java y lógica de programación",

"project.3.title":"Prácticas de Desarrollo Web",

"project.3.text":"Diseño web y tecnologías digitales",

"contact.title":"Contacto",

"contact.intro":"Si tienes un proyecto o deseas conocer más sobre mi perfil, puedes contactarme.",

"contact.emailLabel":"Correo",

"contact.linkedinValue":"Perfil profesional",

"footer.note":"Estiven Murcia · Técnico Profesional en Programación Web · UniEspinal"

};

const EN = {

"nav.home":"HOME",

"nav.about":"ABOUT",

"nav.skills":"SKILLS",

"nav.resume":"RESUME",

"nav.portfolio":"PROJECTS",

"nav.contact":"CONTACT",

"hero.role":"Professional Technician in Web Programming · Junior Web Developer",

"about.title":"About Me",

"about.text":"I am a student of Professional Technician in Web Programming at UniEspinal. I have basic knowledge of HTML, JavaScript and Java, with interest in web development and digital solutions. I am currently improving my programming skills and looking for opportunities to participate in technology projects.",

"about.infoTitle":"Information",

"about.labelLocation":"Location",

"about.valueLocation":"Espinal, Tolima, Colombia",

"about.labelEmail":"Email",

"about.labelLanguages":"Languages",

"about.valueLanguages":"Spanish (native) · Basic English",

"about.labelStatus":"Availability",

"about.valueStatus":"Open to internships",

"about.interestsTitle":"Interests",

"interest.1":"CODE",

"interest.2":"WEB DEVELOPMENT",

"interest.3":"TECHNOLOGY",

"interest.4":"LEARNING",

"skills.title":"Skills",

"skills.technical":"Technical skills",

"skills.professional":"Professional skills",

"skill.support":"User support",

"skill.teamwork":"Teamwork",

"skill.problem":"Problem solving",

"skill.english":"Technical English",

"resume.title":"Education and experience",

"resume.education":"Education",

"resume.experience":"Experience",

"edu.1.title":"Professional Technician in Web Programming",

"edu.1.text":"Training in programming fundamentals, web development and website creation using HTML, JavaScript and Java.",

"edu.2.title":"Web Development Fundamentals",

"edu.2.text":"Learning web structures, programming logic and digital tools.",

"exp.1.title":"Academic Web Projects",

"exp.1.text":"Participation in academic projects applying HTML, JavaScript and Java knowledge to create digital solutions.",

"exp.2.title":"Programming Practice",

"exp.2.text":"Continuous improvement of programming and web development skills.",

"portfolio.title":"Projects",

"project.1.title":"Academic Web Project",

"project.1.text":"HTML, CSS and JavaScript",

"project.2.title":"Basic Java Application",

"project.2.text":"Java and programming logic",

"project.3.title":"Web Development Practice",

"project.3.text":"Web design and digital technologies",

"contact.title":"Contact",

"contact.intro":"If you have a project or want to know more about my profile, feel free to contact me.",

"contact.emailLabel":"Email",

"contact.linkedinValue":"Professional profile",

"footer.note":"Estiven Murcia · Professional Technician in Web Programming · UniEspinal"

};

// El botón ES/EN funciona alternando idiomas

const DICCIONARIOS = {es: ES, en: EN};

let idiomaActual = "es";

function aplicarIdioma(idioma){

const textos = DICCIONARIOS[idioma];

if(!textos) return;

document.querySelectorAll("[data-i18n]").forEach(elemento=>{

const clave = elemento.getAttribute("data-i18n");

if(textos[clave] !== undefined){

elemento.textContent = textos[clave];

}

});

document.documentElement.lang = idioma;

idiomaActual = idioma;

}

function cambiarIdioma(){

aplicarIdioma(idiomaActual === "es" ? "en" : "es");

}

document.addEventListener("DOMContentLoaded",()=>{

aplicarIdioma("es");

});
