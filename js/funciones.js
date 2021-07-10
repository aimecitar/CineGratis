
export function filterArrays(peliculas, categoria) {
  const arraycategoria = peliculas.filter(
    (pelicula) => pelicula.category === categoria
  );
  const arraySeccion = arraycategoria.slice(0, 6);
  return arraySeccion;
}

export function crearSeccion(arrayPeliculas, categoria) {
  const container = document.querySelector(`.${categoria}`);
  arrayPeliculas.forEach((pelicula) => {
    const div = document.createElement("div");
    div.className = "imagen";
    div.innerHTML = `
    <img src="${pelicula.url}" alt="" />
            <a href="#"><div class="overlay">
              <h2>${pelicula.name}</h2>
            </div></a>`;
    container.append(div);
  });
}

export const navUsuario = (usuario) => `<div class="container">
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
        <a class="nav-link" href="#">Terror</a>
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

export const navSinUsuario = (usuario) => `<div class="container">
          <a class="navbar-brand" href="./index.html">
            <img src="../assets/logo_small_icon_only.png" width="30" height="30" class="d-inline-block align-top" alt="">
            CineGratis
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <div class="navbar-nav mr-auto">
       <a class="nav-link" href="#">Terror</a>
       <a class="nav-link" href="#">Romanticas</a>
       <a class="nav-link" href="#">Accion</a>
       <a class="nav-link" href="#">Drama</a>
     </div>
     <div class="d-flex flex-column d-md-block">
       <a href="../login.html" class="btn btn-success my-1">Iniciar Sesion</a>
       <a href="../register.html" class="btn btn-danger">Registrarse</a>
     </div>
  </div>
        </div>`;

export const navAdmin = (usuario) => `<div class="container">
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
        <a class="nav-link" href="#">Terror</a>
        <a class="nav-link" href="#">Romanticas</a>
        <a class="nav-link" href="#">Accion</a>
        <a class="nav-link" href="#">Drama</a>
        <a class="my-1 nav-link btn btn-success text-white" href="../admin.html">PAGINA DE ADMINISTRADOR</a>
      </div>
      <div class="d-flex flex-column d-md-block">
      <div class="d-none d-md-inline font-weight-bold text-white"
      >Bienvenido ${usuario.name}</div>
      <a href="#" class="btn btn-danger d-block cerrarSesion">Cerrar Sesion</a>
      </div>
    </div>
  </div>`;

