SCRIPT.JS - ESTIVEN MURCIA

   Técnico Profesional en Programación Web

   Incluye cambio ES/EN y animaciones de aparición

============================================================ */

/* =========================

   DICCIONARIOS

========================= */

const ES = {

  "nav.home":"INICIO",

  "nav.about":"SOBRE MÍ",

  "nav.skills":"HABILIDADES",

  "nav.resume":"FORMACIÓN",

  "nav.portfolio":"PROYECTOS",

  "nav.contact":"CONTACTO",

  "hero.role":"Técnico Profesional en Programación Web · Desarrollador Web Junior",

  "about.title":"Sobre Mí",

  "about.text":"Soy estudiante de Técnico Profesional en Programación Web en la Institución Universitaria de El Espinal - UniEspinal, con interés en el desarrollo web y la creación de soluciones digitales. Actualmente estoy fortaleciendo mis conocimientos en programación, diferentes lenguajes y herramientas tecnológicas.",

  "about.valueLocation":"Espinal, Tolima, Colombia",

  "about.valueLanguages":"Español (nativo) · Inglés básico",

  "interest.1":"PROGRAMACIÓN",

  "interest.2":"DESARROLLO WEB",

  "interest.3":"TECNOLOGÍA",

  "interest.4":"INNOVACIÓN",

  "contact.intro":"Si tienes un proyecto o deseas conocer más sobre mi perfil profesional, puedes contactarme.",

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

  "about.text":"I am a Professional Technician in Web Programming student at UniEspinal, interested in web development and digital solutions. I am currently improving my programming knowledge, different languages and technological tools.",

  "about.valueLocation":"Espinal, Tolima, Colombia",

  "about.valueLanguages":"Spanish (native) · Basic English",

  "interest.1":"PROGRAMMING",

  "interest.2":"WEB DEVELOPMENT",

  "interest.3":"TECHNOLOGY",

  "interest.4":"INNOVATION",

  "contact.intro":"If you have a project or want to know more about my professional profile, feel free to contact me.",

  "contact.linkedinValue":"Professional profile",

  "footer.note":"Estiven Murcia · Professional Technician in Web Programming · UniEspinal"

};

const DICCIONARIOS = {es:ES,en:EN};

let idiomaActual = "es";

/* =========================

   CAMBIO DE IDIOMA

========================= */

function aplicarIdioma(idioma){

  const textos = DICCIONARIOS[idioma];

  if(!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento=>{

    const clave = elemento.getAttribute("data-i18n");

    if(textos[clave] !== undefined){

      elemento.textContent = textos[clave];

    }

  });

  idiomaActual = idioma;

}

function cambiarIdioma(){

  aplicarIdioma(idiomaActual === "es" ? "en" : "es");

}

/* =========================

   ANIMACIONES DE APARICIÓN

========================= */

function activarAnimaciones(){

  const elementos = document.querySelectorAll(

    ".contenido-seccion, .skill, .interes, .item, .proyecto, .tarjeta, .contenido-banner"

  );

  elementos.forEach(elemento=>{

    elemento.classList.add("animacion-oculta");

  });

  const observador = new IntersectionObserver((entradas, obs)=>{

    entradas.forEach(entrada=>{

      if(entrada.isIntersecting){

        entrada.target.classList.add("mostrar");

        obs.unobserve(entrada.target);

      }

    });

  },{

    threshold:0.15

  });

  elementos.forEach(elemento=>{

    observador.observe(elemento);

  });

}

/* =========================

   BARRAS DE HABILIDADES

========================= */

function animarHabilidades(){

 const barras=document.querySelectorAll(".progreso");

 barras.forEach(barra=>{

   const porcentaje=barra.getAttribute("data-percent");

   barra.style.width=porcentaje+"%";

 });

}

/* =========================

   INICIO

========================= */

document.addEventListener("DOMContentLoaded",()=>{

 aplicarIdioma("es");

 animarHabilidades();

 activarAnimaciones();

});
