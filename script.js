1. STYLE.CSS - ROBOT PROGRAMADOR ANIMADO

==================================================

.robot-programador{

    position: fixed;

    bottom: 20px;

    left: -100px;

    width: 70px;

    height: 90px;

    z-index: 9999;

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

2. STYLE.CSS - ANIMACIÓN HABILIDADES

==================================================

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

    width:0;

    transition:width 1.8s ease-in-out;

}

==================================================

3. SCRIPT.JS - FUNCIÓN ANIMAR HABILIDADES CORREGIDA

==================================================

function animarHabilidades(){

const habilidades = document.querySelectorAll(".skill");

const observador = new IntersectionObserver((entradas)=>{

entradas.forEach(entrada=>{

if(entrada.isIntersecting){

entrada.target.classList.add("mostrar");

const barra = entrada.target.querySelector(".progreso");

if(barra){

const porcentaje = barra.getAttribute("data-percent");

barra.style.width = porcentaje + "%";

}

}

});

},{threshold:0.3});

habilidades.forEach(habilidad=>{

observador.observe(habilidad);

});

}

==================================================

4. SCRIPT.JS - ANIMACIONES GENERALES

==================================================

function activarAnimaciones(){

const elementos=document.querySelectorAll(".skill");

const observador = new IntersectionObserver((entradas)=>{

entradas.forEach(entrada=>{

if(entrada.isIntersecting){

entrada.target.classList.add("mostrar");

}

});

},{threshold:0.2});

elementos.forEach(elemento=>{

observador.observe(elemento);

});

}

==================================================

5. IMPORTANTE - DOMCONTENTLOADED

==================================================

Al final del script debe quedar:

document.addEventListener("DOMContentLoaded",()=>{

    aplicarIdioma("es");

    animarHabilidades();

    activarAnimaciones();

});

