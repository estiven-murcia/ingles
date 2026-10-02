 WEB PROFILE TEMPLATE - SCRIPT

 Estiven Murcia · Técnico Profesional en Programación Web

============================================================ */

/* =========================

   1. SPANISH TEXTS

========================= */

const ES = {

"nav.home": "INICIO",

"nav.about": "SOBRE MÍ",

"nav.skills": "HABILIDADES",

"nav.resume": "FORMACIÓN",

"nav.portfolio": "PROYECTOS",

"nav.contact": "CONTACTO",

"hero.role": "Técnico Profesional en Programación Web · Desarrollador Web Junior",

"about.title": "Sobre Mí",

"about.text": "Soy estudiante de Técnico Profesional en Programación Web en la Institución Universitaria de El Espinal - UniEspinal, con interés en el desarrollo web y la creación de soluciones digitales. Actualmente estoy fortaleciendo mis conocimientos en programación, diferentes lenguajes y herramientas tecnológicas.",

"about.infoTitle": "Información",

"about.labelLocation": "Ubicación",

"about.valueLocation": "Espinal, Tolima, Colombia",

"about.labelEmail": "Correo",

"about.labelLanguages": "Idiomas",

"about.valueLanguages": "Español (nativo) · Inglés básico",

"about.labelStatus": "Disponibilidad",

"about.valueStatus": "Abierto a prácticas",

"about.interestsTitle": "Intereses",

"interest.1": "PROGRAMACIÓN",

"interest.2": "DESARROLLO WEB",

"interest.3": "TECNOLOGÍA",

"interest.4": "INNOVACIÓN",

"skills.title": "Habilidades",

"skills.technical": "Habilidades técnicas",

"skills.professional": "Habilidades profesionales",

"skill.support": "Soporte al usuario",

"skill.teamwork": "Trabajo en equipo",

"skill.problem": "Resolución de problemas",

"skill.english": "Inglés técnico",

"resume.title": "Formación y experiencia",

"resume.education": "Formación",

"resume.experience": "Experiencia",

"edu.1.title": "Técnico Profesional en Programación Web",

"edu.1.text": "Formación enfocada en aprender los fundamentos de la programación, diferentes lenguajes de programación y herramientas tecnológicas, fortaleciendo las bases necesarias para el desarrollo web y la creación de soluciones digitales.",

"edu.2.title": "Fundamentos de Programación",

"edu.2.text": "Aprendizaje de conceptos básicos de programación y herramientas tecnológicas.",

"exp.1.title": "Desarrollo de proyectos académicos web",

"exp.1.text": "Participación en proyectos académicos aplicando conocimientos básicos de HTML, CSS, JavaScript y Java.",

"exp.2.title": "Práctica personal de programación",

"exp.2.text": "Fortalecimiento continuo de habilidades mediante ejercicios de programación y desarrollo web.",

"portfolio.title": "Proyectos",

"contact.title": "Contacto",

"contact.emailLabel": "Correo",

"contact.linkedinValue": "Perfil profesional",

"footer.note": "Estiven Murcia · Técnico Profesional en Programación Web · UniEspinal"

};

/* =========================

   2. ENGLISH TEXTS

========================= */

const EN = {

"nav.home": "HOME",

"nav.about": "ABOUT",

"nav.skills": "SKILLS",

"nav.resume": "RESUME",

"nav.portfolio": "PROJECTS",

"nav.contact": "CONTACT",

"hero.role": "Professional Technician in Web Programming · Junior Web Developer",

"about.title": "About Me",

"about.text": "I am a student of Professional Technician in Web Programming at UniEspinal, interested in web development and digital solutions. I am currently improving my programming knowledge, learning different programming languages and technological tools.",

"about.infoTitle": "Information",

"about.labelLocation": "Location",

"about.valueLocation": "Espinal, Tolima, Colombia",

"about.labelEmail": "Email",

"about.labelLanguages": "Languages",

"about.valueLanguages": "Spanish (native) · Basic English",

"about.labelStatus": "Availability",

"about.valueStatus": "Open to internships",

"about.interestsTitle": "Interests",

"interest.1": "PROGRAMMING",

"interest.2": "WEB DEVELOPMENT",

"interest.3": "TECHNOLOGY",

"interest.4": "INNOVATION",

"skills.title": "Skills",

"skills.technical": "Technical skills",

"skills.professional": "Professional skills",

"resume.title": "Education and experience",

"resume.education": "Education",

"resume.experience": "Experience",

"edu.1.title": "Professional Technician in Web Programming",

"edu.1.text": "Training focused on learning programming fundamentals, different programming languages and technological tools, strengthening the foundations required for web development and digital solutions.",

"contact.title": "Contact",

"contact.emailLabel": "Email",

"footer.note": "Estiven Murcia · Professional Technician in Web Programming · UniEspinal"

};

/* LANGUAGE SWITCHER - KEEP ORIGINAL FUNCTIONS */

const DICCIONARIOS = { es: ES, en: EN };

let idiomaActual = "es";

function cambiarIdioma() {

  aplicarIdioma(idiomaActual === "es" ? "en" : "es");

}

