/* ------------------------------------------------------------
   1. DICCIONARIOS DE IDIOMA (Corregidos sin "Desarrollador Web Junior")
   ------------------------------------------------------------ */
const ES = {
  "nav.home": "INICIO",
  "nav.about": "SOBRE MÍ",
  "nav.skills": "HABILIDADES",
  "nav.resume": "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact": "CONTACTO",
  "hero.role": "Técnico Profesional en Programación Web",
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
  "project.1.title": "Proyecto Web Personal",
  "project.1.text": "HTML · CSS · JavaScript",
  "project.2.title": "Aplicación Web Académica",
  "project.2.text": "JavaScript · Desarrollo Web",
  "project.3.title": "Prácticas de Programación",
  "project.3.text": "Java · Fundamentos de programación",
  "contact.title": "Contacto",
  "contact.intro": "Si tienes un proyecto o deseas conocer más sobre mi perfil profesional, puedes contactarme.",
  "contact.emailLabel": "Correo",
  "contact.linkedinValue": "Perfil profesional",
  "footer.note": "Estiven Murcia · Técnico Profesional en Programación Web · UniEspinal"
};

const EN = {
  "nav.home": "HOME",
  "nav.about": "ABOUT ME",
  "nav.skills": "SKILLS",
  "nav.resume": "EDUCATION",
  "nav.portfolio": "PROJECTS",
  "nav.contact": "CONTACT",
  "hero.role": "Professional Technician in Web Programming",
  "about.title": "About Me",
  "about.text": "I am a student of Professional Technician in Web Programming at UniEspinal, interested in web development and creating digital solutions. I am currently strengthening my knowledge in programming, different languages, and tech tools.",
  "about.infoTitle": "Information",
  "about.labelLocation": "Location",
  "about.valueLocation": "Espinal, Tolima, Colombia",
  "about.labelEmail": "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · Basic English",
  "about.labelStatus": "Availability",
  "about.valueStatus": "Open to internship",
  "about.interestsTitle": "Interests",
  "interest.1": "PROGRAMMING",
  "interest.2": "WEB DEVELOPMENT",
  "interest.3": "TECHNOLOGY",
  "interest.4": "INNOVATION",
  "skills.title": "Skills",
  "skills.technical": "Technical Skills",
  "skills.professional": "Professional Skills",
  "skill.support": "User Support",
  "skill.teamwork": "Teamwork",
  "skill.problem": "Problem Solving",
  "resume.title": "Education & Experience",
  "resume.education": "Education",
  "resume.experience": "Experience",
  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text": "Training focused on learning programming fundamentals, languages, and tools to build digital solutions.",
  "edu.2.title": "Programming Fundamentals",
  "edu.2.text": "Learning core concepts of programming and tech tools.",
  "exp.1.title": "Academic Web Projects",
  "exp.1.text": "Participated in academic web development using HTML, CSS, JavaScript, and Java.",
  "exp.2.title": "Personal Coding Practice",
  "exp.2.text": "Continuous self-improvement through coding exercises and web projects.",
  "portfolio.title": "Projects",
  "project.1.title": "Personal Web Project",
  "project.1.text": "HTML · CSS · JavaScript",
  "project.2.title": "Academic Web App",
  "project.2.text": "JavaScript · Web Development",
  "project.3.title": "Programming Practices",
  "project.3.text": "Java · Programming Fundamentals",
  "contact.title": "Contact",
  "contact.intro": "If you have a project or would like to learn more about my profile, feel free to contact me.",
  "contact.emailLabel": "Email",
  "contact.linkedinValue": "Professional Profile",
  "footer.note": "Estiven Murcia · Professional Technician in Web Programming · UniEspinal"
};

/* ------------------------------------------------------------
   2. SISTEMA DE CAMBIO DE IDIOMA
   ------------------------------------------------------------ */
const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    }
  });

  document.documentElement.lang = idioma;
  idiomaActual = idioma;

  const spanEs = document.getElementById("idioma-es");
  const spanEn = document.getElementById("idioma-en");
  
  if (spanEs && spanEn) {
    if (idioma === "es") {
      spanEs.style.opacity = "1";
      spanEs.style.fontWeight = "bold";
      spanEn.style.opacity = "0.4";
      spanEn.style.fontWeight = "normal";
    } else {
      spanEs.style.opacity = "0.4";
      spanEs.style.fontWeight = "normal";
      spanEn.style.opacity = "1";
      spanEn.style.fontWeight = "bold";
    }
  }
}

function cambiarIdioma() {
  const nuevoIdioma = idiomaActual === "es" ? "en" : "es";
  aplicarIdioma(nuevoIdioma);
}

/* ------------------------------------------------------------
   3. MENÚ RESPONSIVO Y ANIMACIONES
   ------------------------------------------------------------ */
let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  nav.className = "";
  menuVisible = false;
}

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");
  barras.forEach(barra => {
    barra.style.width = "0%";
    setTimeout(() => {
      const porcentaje = barra.getAttribute("data-percent");
      if (porcentaje) {
        barra.style.width = porcentaje + "%";
      }
    }, 500);
  });
}

function activarAnimaciones() {
  const elementos = document.querySelectorAll(".contenido-seccion, .item, .skill, .tarjeta, .proyecto");

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("animacion-visible");
      }
    });
  }, { threshold: 0.15 });

  elementos.forEach(elemento => {
    elemento.classList.add("animacion-oculta");
    observador.observe(elemento);
  });
}

/* ------------------------------------------------------------
   4. INICIALIZACIÓN
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
  activarAnimaciones();
});
