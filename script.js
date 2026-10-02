/* ------------------------------------------------------------
   1. DICCIONARIOS DE IDIOMA
   ------------------------------------------------------------ */
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
  "nav.about": "ABOUT",
  "nav.skills": "SKILLS",
  "nav.resume": "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact": "CONTACT",
  "hero.role": "Professional Technician in Web Programming · Junior Web Developer",
  "about.title": "About Me",
  "about.text": "I am a Professional Technician in Web Programming student at UniEspinal, interested in web development and digital solutions. I am currently improving my programming knowledge, different programming languages and technological tools.",
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
  "skill.support": "User support",
  "skill.teamwork": "Teamwork",
  "skill.problem": "Problem solving",
  "skill.english": "Technical English",
  "resume.title": "Education and Experience",
  "resume.education": "Education",
  "resume.experience": "Experience",
  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text": "Training focused on learning programming fundamentals, different programming languages and technological tools.",
  "edu.2.title": "Programming Fundamentals",
  "edu.2.text": "Learning basic concepts of programming and technological tools.",
  "exp.1.title": "Development of Academic Web Projects",
  "exp.1.text": "Participation in academic projects applying basic knowledge of HTML, CSS, JavaScript, and Java.",
  "exp.2.title": "Personal Programming Practice",
  "exp.2.text": "Continuous improvement of skills through programming exercises and web development.",
  "portfolio.title": "Projects",
  "project.1.title": "Personal Web Project",
  "project.1.text": "HTML · CSS · JavaScript",
  "project.2.title": "Academic Web Application",
  "project.2.text": "JavaScript · Web Development",
  "project.3.title": "Programming Practices",
  "project.3.text": "Java · Programming Fundamentals",
  "contact.title": "Contact",
  "contact.intro": "If you have a project or want to know more about my professional profile, feel free to contact me.",
  "contact.emailLabel": "Email",
  "contact.linkedinValue": "Professional profile",
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
  actualizarBotonIdioma();
}

function cambiarIdioma() {
  const nuevoIdioma = idiomaActual === "es" ? "en" : "es";
  aplicarIdioma(nuevoIdioma);
}

function actualizarBotonIdioma() {
  const btnEs = document.querySelector(".idioma-activo, .idioma-inactivo");
  const btn = document.getElementById("btn-idioma");
  
  if (!btn) return;

  const spanEs = btn.querySelector("span:nth-child(1)");
  const spanEn = btn.querySelector("span:nth-child(3)");

  if (spanEs && spanEn) {
    if (idiomaActual === "es") {
      spanEs.className = "idioma-activo";
      spanEn.className = "idioma-inactivo";
    } else {
      spanEs.className = "idioma-inactivo";
      spanEn.className = "idioma-activo";
    }
  }
}

/* ------------------------------------------------------------
   3. MENÚ RESPONSIVO Y NAVEGACIÓN
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

/* ------------------------------------------------------------
   4. ANIMACIONES
   ------------------------------------------------------------ */
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
   5. INICIALIZACIÓN
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
  activarAnimaciones();
});
