/* ------------------------------------------------------------
   1. VARIABLES Y ESTILOS GENERALES
   ------------------------------------------------------------ */
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Work+Sans:wght@300;400;600;800&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #1e2326;
  color: #fff;
}

/* ------------------------------------------------------------
   2. HEADER Y NAVEGACIÓN
   ------------------------------------------------------------ */
.contenedor-header {
  background: #1e2326;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}

.contenedor-header header {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.contenedor-header header .logo a {
  font-family: 'Righteous', cursive;
  font-size: 36px;
  color: #1CB69D;
  text-decoration: none;
}

.contenedor-header header nav ul {
  display: flex;
  list-style: none;
}

.contenedor-header header nav ul li a {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.3s;
}

.contenedor-header header nav ul li a:hover {
  color: #1CB69D;
}

/* Botón de Idioma y Menú Responsivo */
.acciones-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.btn-idioma {
  background: transparent;
  border: 1px solid #1CB69D;
  color: #fff;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;
}

.btn-idioma:hover {
  background: #1CB69D;
  color: #1e2326;
}

.btn-idioma span {
  transition: opacity 0.3s, font-weight 0.3s;
}

.nav-responsive {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  display: none;
}

/* ------------------------------------------------------------
   3. INICIO / HERO
   ------------------------------------------------------------ */
.inicio {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}

.contenido-banner .contenedor-img {
  width: 180px;
  height: 180px;
  margin: 0 auto 20px auto;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #1CB69D;
}

.contenido-banner .contenedor-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contenido-banner h1 {
  font-size: 42px;
  font-family: 'Righteous', cursive;
  margin-bottom: 10px;
}

.contenido-banner h2 {
  font-size: 18px;
  font-weight: 400;
  color: #1CB69D;
  margin-bottom: 20px;
}

.contenido-banner .redes a {
  color: #fff;
  display: inline-block;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  line-height: 42px;
  margin: 0 8px;
  font-size: 18px;
  transition: 0.3s;
}

.contenido-banner .redes a:hover {
  background-color: #1CB69D;
  border-color: #1CB69D;
  color: #1e2326;
}

/* ------------------------------------------------------------
   4. SECCIONES COMUNES
   ------------------------------------------------------------ */
.contenido-seccion {
  max-width: 1100px;
  margin: auto;
  padding: 80px 20px;
}

.contenido-seccion h2 {
  font-size: 32px;
  font-family: 'Righteous', cursive;
  text-align: center;
  padding: 20px 0;
  color: #1CB69D;
}

/* ------------------------------------------------------------
   5. SOBRE MÍ
   ------------------------------------------------------------ */
.sobremi {
  background-color: #252A2E;
}

.sobremi p {
  line-height: 28px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 40px;
  color: #ccc;
}

.fila {
  display: flex;
  gap: 30px;
}

.col {
  width: 50%;
}

.col h3 {
  font-size: 22px;
  font-family: 'Righteous', cursive;
  margin-bottom: 20px;
}

.sobremi .datos li {
  list-style: none;
  margin-bottom: 15px;
  border-bottom: 1px solid #363a3d;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
}

.sobremi .datos li strong {
  color: #1CB69D;
}

.sobremi .datos li .destacado {
  background-color: #1CB69D;
  color: #1e2326;
  padding: 2px 8px;
  border-radius: 3px;
  font-weight: 600;
}

.contenedor-intereses {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.interes {
  background-color: #1e2326;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.interes:hover {
  transform: translateY(-5px);
}

.interes i {
  font-size: 30px;
  color: #1CB69D;
  margin-bottom: 10px;
  display: block;
}

.interes span {
  font-size: 13px;
  font-weight: 600;
}

/* ------------------------------------------------------------
   6. HABILIDADES
   ------------------------------------------------------------ */
.skills .skill {
  margin-bottom: 20px;
}

.skills .skill .skill-nombre {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
}

.skills .barra-skill {
  height: 8px;
  width: 100%;
  background-color: #252A2E;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

.skills .progreso {
  background-color: #1CB69D;
  height: 100%;
  width: 0%;
  transition: width 1.2s ease-in-out;
  border-radius: 5px;
}

/* ------------------------------------------------------------
   7. FORMACIÓN Y EXPERIENCIA
   ------------------------------------------------------------ */
.curriculum {
  background-color: #252A2E;
}

.curriculum .item {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #1e2326;
  border-left: 4px solid #1CB69D;
  border-radius: 0 8px 8px 0;
}

.curriculum .item h4 {
  font-size: 18px;
  color: #1CB69D;
  margin-bottom: 5px;
}

.curriculum .item .casa {
  font-size: 13px;
  font-weight: 600;
  color: #888;
  display: block;
  margin-bottom: 10px;
}

.curriculum .item p {
  font-size: 14px;
  line-height: 22px;
  color: #ccc;
}

/* ------------------------------------------------------------
   8. PROYECTOS / PORTAFOLIO
   ------------------------------------------------------------ */
.portfolio .galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.portfolio .proyecto {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  display: block;
  text-decoration: none;
  color: #fff;
  background-color: #252A2E;
  height: 200px;
}

.portfolio .proyecto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.portfolio .proyecto .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(28, 182, 157, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s;
  padding: 20px;
  text-align: center;
}

.portfolio .proyecto:hover img {
  transform: scale(1.1);
}

.portfolio .proyecto:hover .overlay {
  opacity: 1;
}

.portfolio .proyecto .overlay h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #1e2326;
}

.portfolio .proyecto .overlay p {
  font-size: 13px;
  color: #1e2326;
  font-weight: 600;
}

/* ------------------------------------------------------------
   9. CONTACTO
   ------------------------------------------------------------ */
.contacto {
  background-color: #252A2E;
}

.contacto-intro {
  text-align: center;
  margin-bottom: 40px;
  color: #ccc;
}

.tarjetas-contacto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.tarjeta {
  background-color: #1e2326;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: 1px solid transparent;
  transition: transform 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tarjeta:hover {
  transform: translateY(-5px);
  border-color: #1CB69D;
}

.tarjeta i {
  font-size: 36px;
  color: #1CB69D;
  margin-bottom: 15px;
}

.tarjeta strong {
  font-size: 18px;
  margin-bottom: 8px;
  display: block;
}

.tarjeta span {
  font-size: 14px;
  color: #aaa;
  word-break: break-all;
}

/* ------------------------------------------------------------
   10. FOOTER
   ------------------------------------------------------------ */
footer {
  background-color: #1e2326;
  padding: 40px 20px;
  text-align: center;
  position: relative;
}

footer .arriba {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #1CB69D;
  color: #1e2326;
  border-radius: 50%;
  line-height: 40px;
  font-size: 18px;
  margin-bottom: 15px;
  transition: transform 0.3s;
}

footer .arriba:hover {
  transform: translateY(-5px);
}

footer .footer-nota {
  font-size: 14px;
  color: #888;
}

/* ------------------------------------------------------------
   11. ANIMACIONES DE DESPLAZAMIENTO
   ------------------------------------------------------------ */
.animacion-oculta {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animacion-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ------------------------------------------------------------
   12. DISEÑO RESPONSIVO (MÓVILES Y TABLETS)
   ------------------------------------------------------------ */
@media screen and (max-width: 768px) {
  .nav-responsive {
    display: block;
  }

  .contenedor-header header nav {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #1e2326;
    height: 0;
    overflow: hidden;
    transition: height 0.4s ease;
  }

  .contenedor-header header nav.responsive {
    height: calc(100vh - 60px);
  }

  .contenedor-header header nav ul {
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
  }

  .contenedor-header header nav ul li {
    margin: 15px 0;
  }

  .fila {
    flex-direction: column;
  }

  .col {
    width: 100%;
  }

  .contenido-banner h1 {
    font-size: 32px;
  }

  .contenido-banner h2 {
    font-size: 16px;
  }
}
