==================================================

1. STYLE.CSS - ANIMACIONES GENERALES

==================================================

/* ELEMENTOS ANIMADOS */

.animacion-oculta{

opacity:0;

transform:translateY(50px);

transition:all 0.9s ease;

}

.animacion-visible{

opacity:1;

transform:translateY(0);

}

/* HABILIDADES */

.skill{

opacity:0;

transform:translateY(40px);

transition:all 0.8s ease;

}

.skill.mostrar{

opacity:1;

transform:translateY(0);

}

.progreso{

width:0%;

transition:width 2s ease-in-out;

}

==================================================

2. STYLE.CSS - ROBOT PROGRAMADOR

==================================================

.robot-programador{

position:fixed;

bottom:20px;

left:-100px;

width:70px;

height:90px;

z-index:9999;

pointer-events:none;

animation:

caminar 15s linear infinite,

saltar 1s ease-in-out infinite;

}

.robot-cabeza{

width:60px;

height:45px;

background:#14b8a6;

border-radius:15px;

display:flex;

justify-content:center;

align-items:center;

gap:12px;

}

.ojo{

width:10px;

height:10px;

background:white;

border-radius:50%;

}

.robot-cuerpo{

width:50px;

height:35px;

background:#374151;

margin:auto;

border-radius:8px;

}

.robot-piernas{

display:flex;

justify-content:center;

gap:15px;

}

.robot-piernas span{

width:10px;

height:20px;

background:#14b8a6;

}

@keyframes caminar{

0%{

left:-100px;

}

50%{

left:90%;

}

100%{

left:-100px;

}

}

@keyframes saltar{

0%,100%{

transform:translateY(0);

}

50%{

transform:translateY(-10px);

}

}

==================================================

3. SCRIPT.JS - ANIMACIÓN HABILIDADES CORREGIDA

==================================================

function animarHabilidades(){

const habilidades=document.querySelectorAll(".skill");

const observador=new IntersectionObserver((entradas)=>{

entradas.forEach(entrada=>{

if(entrada.isIntersecting){

const elemento=entrada.target;

elemento.classList.add("mostrar");

const barra=elemento.querySelector(".progreso");

if(barra){

const valor=barra.getAttribute("data-percent");

barra.style.width=valor+"%";

}

observador.unobserve(elemento);

}

});

},{threshold:0.3});

habilidades.forEach(habilidad=>{

observador.observe(habilidad);

});

}

==================================================

4. SCRIPT.JS - TODAS LAS ANIMACIONES DE LA PÁGINA

==================================================

function activarAnimaciones(){

const elementos=document.querySelectorAll(

".contenido-seccion, .item, .skill, .tarjeta, .proyecto"

);

const observador=new IntersectionObserver((entradas)=>{

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

==================================================

5. FINAL DEL SCRIPT.JS

==================================================

document.addEventListener("DOMContentLoaded",()=>{

aplicarIdioma("es");

animarHabilidades();

activarAnimaciones();

});

==================================================

6. INDEX.HTML - ROBOT

==================================================

Antes de cerrar:

</body>

agregar:

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

