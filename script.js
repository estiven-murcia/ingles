Esta corrección está enfocada en solucionar el error actual:

- Las animaciones no cargan.

- Las barras de habilidades no se llenan.

- El JavaScript se estaba rompiendo por errores de sintaxis.

IMPORTANTE:

Mantener los diccionarios ES y EN con la información de Estiven Murcia.

Reemplazar desde la parte de funciones (después de los diccionarios) por este código:

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

barra.style.width = "0";

setTimeout(()=>{

const porcentaje = barra.getAttribute("data-percent");

barra.style.width = porcentaje + "%";

},300);

});

}

/* ANIMACIONES DE ENTRADA */

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

},{threshold:0.15});

elementos.forEach(elemento=>{

elemento.classList.add("animacion-oculta");

observador.observe(elemento);

});

}

/* INICIO */

document.addEventListener("DOMContentLoaded",()=>{

aplicarIdioma("es");

animarHabilidades();

activarAnimaciones();

});
