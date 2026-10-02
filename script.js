/* ============================================================
   DICCIONARIOS DE TRADUCCIÓN (Estiven Murcia)
   ============================================================ */
const ES = {
  "nav.home": "INICIO",
  "nav.about": "SOBRE MÍ",
  "nav.skills": "SKILLS",
  "nav.resume": "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact": "CONTACTO",
  "hero.role": "Desarrollador Web · Soporte Técnico",
  "about.title": "Sobre Mí",
  "about.text": "Hola, soy Estiven Murcia. Estudiante entusiasta de programación web y soporte técnico, enfocado en crear aplicaciones funcionales y brindar soluciones tecnológicas eficaces.",
  "about.infoTitle": "Información",
  "about.labelLocation": "Ubicación",
  "about.valueLocation": "El Espinal, Tolima, Colombia",
  "about.labelEmail": "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (Técnico / B1)",
  "about.labelStatus": "Disponibilidad",
  "about.valueStatus": "Abierto a prácticas",
  "about.interestsTitle": "Intereses",
  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",
  "skills.title": "Habilidades",
  "skills.technical": "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support": "Soporte al usuario",
  "skill.teamwork": "Trabajo en equipo",
  "skill.problem": "Resolución de problemas",
  "skill.english": "Inglés técnico",
  "resume.title": "Formación y experiencia",
  "resume.education": "Formación",
  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text": "Formación técnica enfocada en desarrollo web frontend y backend, bases de datos y arquitectura de software.",
  "edu.2.title": "Cursos de Soporte y Desarrollo",
  "edu.2.text": "Capacitaciones autónomas en mantenimiento de equipos, redes y fundamentos de programación.",
  "resume.experience": "Experiencia",
  "exp.1.title": "Proyectos Académicos Web",
  "exp.1.text": "Desarrollo de sitios web interactivos usando HTML5, CSS3 y JavaScript con diseño adaptable (responsive).",
  "exp.2.title": "Soporte Técnico Informático",
  "exp.2.text": "Mantenimiento preventivo/correctivo de hardware y software, además de configuración de redes locales.",
  "portfolio.title": "Proyectos",
  "project.1.title": "Sitio Web Responsive",
  "project.1.text": "HTML5 / CSS3 / JS",
  "project.2.title": "Sistema de Gestión",
  "project.2.text": "JavaScript / MySQL",
  "project.3.title": "Portafolio Personal",
  "project.3.text": "HTML / CSS / JS i18n",
  "contact.title": "Contacto",
  "contact.intro": "¡Gracias por visitar mi portafolio! Si deseas contactarme para proyectos o prácticas, escríbeme.",
  "contact.emailLabel": "Correo",
  "contact.linkedinValue": "Estiven Murcia",
  "footer.note": "Estiven Murcia · Técnico Profesional en Programación Web · UniEspinal"
};

const EN = {
  "nav.home": "HOME",
  "nav.about": "ABOUT ME",
  "nav.skills": "SKILLS",
  "nav.resume": "EDUCATION",
  "nav.portfolio": "PROJECTS",
  "nav.contact": "CONTACT",
  "hero.role": "Web Developer · IT Technical Support",
  "about.title": "About Me",
  "about.text": "Hello, I am Estiven Murcia. Enthusiastic web development and technical support student focused on building functional web applications and delivering effective tech solutions.",
  "about.infoTitle": "Information",
  "about.labelLocation": "Location",
  "about.valueLocation": "El Espinal, Tolima, Colombia",
  "about.labelEmail": "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (Native) · English (Technical / B1)",
  "about.labelStatus": "Availability",
  "about.valueStatus": "Open for internships",
  "about.interestsTitle": "Interests",
  "interest.1": "CODING",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",
  "skills.title": "Skills",
  "skills.technical": "Technical Skills",
  "skills.professional": "Professional Skills",
  "skill.support": "User Support",
  "skill.teamwork": "Teamwork",
  "skill.problem": "Problem Solving",
  "skill.english": "Technical English",
  "resume.title": "Education & Experience",
  "resume.education": "Education",
  "edu.1.title": "Technical Degree in Web Programming",
  "edu.1.text": "Technical education focused on frontend/backend web development, databases, and software architecture.",
  "edu.2.title": "IT Support & Dev Courses",
  "edu.2.text": "Self-paced training in computer maintenance, networking, and programming fundamentals.",
  "resume.experience": "Experience",
  "exp.1.title": "Academic Web Projects",
  "exp.1.text": "Development of interactive websites using HTML5, CSS3, and JavaScript with responsive design.",
  "exp.2.title": "IT Technical Support",
  "exp.2.text": "Preventive and corrective maintenance of hardware/software and local network configuration.",
  "portfolio.title": "Projects",
  "project.1.title": "Responsive Website",
  "project.1.text": "HTML5 / CSS3 / JS",
  "project.2.title": "Management System",
  "project.2.text": "JavaScript / MySQL",
  "project.3.title": "Personal Portfolio",
  "project.3.text": "HTML / CSS / JS i18n",
  "contact.title": "Contact",
  "contact.intro": "Thank you for visiting my portfolio! Feel free to reach out for opportunities or collaborations.",
  "contact.emailLabel": "Email",
  "contact.linkedinValue": "Estiven Murcia",
  "footer.note": "Estiven Murcia · Technical Degree in Web Programming · UniEspinal"
};

/* ============================================================
   FUNCIONES DE NAVEGACIÓN Y MULTIIDIOMA
   ============================================================ */
const DICCIONARIOS = { es: ES, en: EN };
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
  
  // Actualizar clases activas del botón de idioma
  const btnIdioma = document.getElementById("btn-idioma");
  if(btnIdioma) {
    const spanEs = btnIdioma.querySelector(".idioma-activo");
    const spanEn = btnIdioma.querySelector(".idioma-inactivo");
    if(spanEs && spanEn) {
      if(idioma === "es") {
        spanEs.style.fontWeight = "bold";
        spanEn.style.fontWeight = "normal";
      } else {
        spanEs.style.fontWeight = "normal";
        spanEn.style.fontWeight = "bold";
      }
    }
  }
  
  idiomaActual = idioma;
}

function cambiarIdioma(){
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}

let menuVisible = false;
function mostrarOcultarMenu(){
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu(){
  document.getElementById("nav").className = "";
  menuVisible = false;
}

/* CORRECCION DE BARRAS DE HABILIDADES */
function animarHabilidades(){
  const barras = document.querySelectorAll(".progreso");
  barras.forEach(barra=>{
    barra.style.width = "0%";
    setTimeout(()=>{
      const porcentaje = barra.getAttribute("data-percent");
      barra.style.width = porcentaje + "%";
    }, 300);
  });
}

/* ANIMACIONES DE ENTRADA CON INTERSECTION OBSERVER */
function activarAnimaciones(){
  const elementos = document.querySelectorAll(
    ".contenido-seccion, .item, .skill, .tarjeta, .proyecto"
  );
  
  const observador = new IntersectionObserver((entradas)=>{
    entradas.forEach(entrada=>{
      if(entrada.isIntersecting){
        entrada.target.classList.add("animacion-visible");
      }
    });
  },{threshold: 0.15});

  elementos.forEach(elemento=>{
    elemento.classList.add("animacion-oculta");
    observador.observe(elemento);
  });
}

/* INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO */
document.addEventListener("DOMContentLoaded", ()=>{
  aplicarIdioma("es");
  animarHabilidades();
  activarAnimaciones();
});
