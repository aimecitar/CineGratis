//----navbar---

nav.innerHTML = createNav();

let log = false;
localStorage.setItem("log", log);

function createNav() {
  let isLog = localStorage.getItem("log");
  if (isLog === "true") {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario.rol === "user") {
      header.append(nav);
      return `<div class="container">
    <a
      class="navbar-brand d-inline d-md-none font-weight-bold text-white"
    >
      Bienvenido ${usuario.name}</a
    >
    <a class="navbar-brand d-none d-md-inline" href="./index.html">
      <img
        src="../assets/logo_small_icon_only.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      CineGratis
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div class="navbar-nav mr-auto">
        <a class="nav-link" href="#">Comedia</a>
        <a class="nav-link" href="#">Romanticas</a>
        <a class="nav-link" href="#">Accion</a>
        <a class="nav-link" href="#">Drama</a>
      </div>
      <div class="d-flex flex-column d-md-block">
      <div class="d-none d-md-inline font-weight-bold text-white"
      >Bienvenido ${usuario.name}</div>
      <a href="#" class="btn btn-danger d-block cerrarSesion">Cerrar Sesion</a>
      </div>
    </div>
  </div>`;
    } else {
      header.append(nav);
      return `<div class="container">
    <a
      class="navbar-brand d-inline d-md-none font-weight-bold text-white"
    >
      Bienvenido ${usuario.name}</a
    >
    <a class="navbar-brand d-none d-md-inline" href="./index.html">
      <img
        src="../assets/logo_small_icon_only.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      CineGratis
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div class="navbar-nav mr-auto">
        <a class="nav-link" href="#">Comedia</a>
        <a class="nav-link" href="#">Romanticas</a>
        <a class="nav-link" href="#">Accion</a>
        <a class="nav-link" href="#">Drama</a>
        <a class="nav-link btn btn-success text-white" href="../admin.html">PAGINA DE ADMINISTRADOR</a>
      </div>
      <div class="d-flex flex-column d-md-block">
      <div class="d-none d-md-inline font-weight-bold text-white"
      >Bienvenido ${usuario.name}</div>
      <a href="#" class="btn btn-danger d-block cerrarSesion">Cerrar Sesion</a>
      </div>
    </div>
  </div>`;
    }
  } else {
    header.append(nav);
    return `<div class="container">
          <a class="navbar-brand" href="./index.html">
            <img src="../assets/logo_small_icon_only.png" width="30" height="30" class="d-inline-block align-top" alt="">
            CineGratis
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <div class="navbar-nav mr-auto">
       <a class="nav-link" href="#">Comedia</a>
       <a class="nav-link" href="#">Romanticas</a>
       <a class="nav-link" href="#">Accion</a>
       <a class="nav-link" href="#">Drama</a>
     </div>
     <div class="d-flex flex-column d-md-block">
       <a href="#" class="btn btn-success my-1">Iniciar Sesion</a>
       <a href="../register.html" class="btn btn-danger">Registrarse</a>
     </div>
  </div>
        </div>`;
  }
}

nav.addEventListener("click", (e) => {
  if (e.target.classList.contains("cerrarSesion")) {
    isLog = false;
    localStorage.setItem("log", isLog);
    window.location.href = "../index.html";
  }
});
