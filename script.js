==================================================

1. INDEX.HTML - AGREGAR ROBOT

==================================================

Ubicar antes de:

<script src="script.js"></script>

Agregar:

<div class="robot-programador">

    <div class="robot-cabeza">

        <div class="ojo"></div>

        <div class="ojo"></div>

    </div>

    <div class="robot-cuerpo"></div>

    <div class="robot-piernas">

        <span></span>

        <span></span>

    </div>

</div>

==================================================

2. STYLE.CSS - ANIMACIONES DE HABILIDADES

==================================================

.progreso {

    width:0;

    transition: width 1.8s ease-in-out;

}

.skill {

    opacity:0;

    transform:translateY(30px);

    transition:all 0.8s ease;

}

.skill.mostrar {

    opacity:1;

    transform:translateY(0);

}

.progreso span {

    transform:scale(0);

    transition:transform 0.5s ease 1s;

}

.skill.mostrar .progreso span {

    transform:scale(1);

}

==================================================

3. STYLE.CSS - ROBOT PROGRAMADOR

==================================================

.robot-programador {

    position:fixed;

    bottom:25px;

    left:-100px;

    width:70px;

    height:90px;

    z-index:999;

    animation:

    caminar 18s linear infinite,

    saltar 1s ease-in-out infinite;

}

.robot-cabeza {

    width:60px;

    height:45px;

    background:#14b8a6;

    border-radius:15px;

    display:flex;

    justify-content:center;

    align-items:center;

    gap:15px;

}

.ojo {

    width:10px;

    height:10px;

    background:white;

    border-radius:50%;

}

.robot-cuerpo {

    width:50px;

    height:35px;

    background:#374151;

    margin:auto;

    border-radius:8px;

}

.robot-piernas {

    display:flex;

    justify-content:center;

    gap:15px;

}

.robot-piernas span {

    width:10px;

    height:20px;

    background:#14b8a6;

}

@keyframes caminar {

0% {

    left:-100px;

}

50% {

    left:90%;

}

100% {

    left:-100px;

}

}

@keyframes saltar {

0%,100% {

    transform:translateY(0);

}

50% {

    transform:translateY(-10px);

}

}

==================================================

4. SCRIPT.JS

==================================================

Mantener:

- Diccionario ES.

- Diccionario EN.

- Función cambiarIdioma().

- Función aplicarIdioma().

- Función animarHabilidades().

Agregar animación por desplazamiento:

function activarAnimaciones(){

const elementos=document.querySelectorAll(

".contenido-seccion, .skill, .interes, .item, .proyecto, .tarjeta"

);

elementos.forEach(elemento=>{

elemento.classList.add("animacion-oculta");

});

const observador=new IntersectionObserver((entradas,obs)=>{

entradas.forEach(entrada=>{

if(entrada.isIntersecting){

entrada.target.classList.add("mostrar");

obs.unobserve(entrada.target);

}

});

},{threshold:0.15});

elementos.forEach(elemento=>{

observador.observe(elemento);

});

}

==================================================

5. ESTADO FINAL DEL PORTAFOLIO

==================================================

Nombre:

Estiven Murcia

Formación:

Técnico Profesional en Programación Web

UniEspinal

Tecnologías:

HTML

CSS

JavaScript

Java

Bases de datos

Redes:

GitHub:

https://github.com/estiven-murcia

LinkedIn:

Perfil profesional

Correo:

estiven42@itfip.edu.co

