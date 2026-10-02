/* ANIMACION HABILIDADES */

function animarHabilidades(){

    const habilidades = document.querySelectorAll(".skill");

    const observador = new IntersectionObserver((entradas, observer)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                const habilidad = entrada.target;

                habilidad.classList.add("mostrar");

                const barra = habilidad.querySelector(".progreso");

                if(barra){

                    const porcentaje = barra.getAttribute("data-percent");

                    barra.style.width = porcentaje + "%";

                }

                observer.unobserve(habilidad);

            }

        });

    }, {threshold:0.4});

    habilidades.forEach(habilidad=>{

        observador.observe(habilidad);

    });

}

/* ANIMACIONES GENERALES */

function activarAnimaciones(){

    const elementos = document.querySelectorAll(

        ".contenido-seccion, .item, .tarjeta, .proyecto"

    );

    const observador = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                entrada.target.classList.add("animacion-visible");

            }

        });

    }, {threshold:0.2});

    elementos.forEach(elemento=>{

        elemento.classList.add("animacion-oculta");

        observador.observe(elemento);

    });

}

/* ROBOT PROGRAMADOR */

function crearRobot(){

    const robot = document.createElement("div");

    robot.className = "robot-programador";

    robot.innerHTML = `

        <div class="robot-cabeza">

            <div class="ojo"></div>

            <div class="ojo"></div>

        </div>

        <div class="robot-cuerpo"></div>

        <div class="robot-piernas">

            <span></span>

            <span></span>

        </div>

    `;

    document.body.appendChild(robot);

}

/* INICIO */

document.addEventListener("DOMContentLoaded",()=>{

    aplicarIdioma("es");

    animarHabilidades();

    activarAnimaciones();

    crearRobot();

});
