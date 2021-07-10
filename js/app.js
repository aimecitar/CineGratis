import { navUsuario, navAdmin, navSinUsuario } from "./funciones.js";
import { filterArrays, crearSeccion } from "./funciones.js";

(function destacadas() {
  const peliculas = JSON.parse(localStorage.getItem("peliculas"));
  const section = document.querySelector(".categorias");
  if (peliculas.some((pelicula) => pelicula.destacada === true)) {
    const arrayPeliculas = peliculas.slice(0, 6);
    crearSeccion(arrayPeliculas, "Destacadas");
  }
  if (peliculas.some((pelicula) => pelicula.category === "Drama")) {
    const arrayPeliculas = filterArrays(peliculas, "Drama");
    crearSeccion(arrayPeliculas, "Drama");
  }
  if (peliculas.some((pelicula) => pelicula.category === "Terror")) {
    const arrayPeliculas = filterArrays(peliculas, "Terror");
    crearSeccion(arrayPeliculas, "Terror");
  }
  if (peliculas.some((pelicula) => pelicula.category === "Comedia")) {
    const arrayPeliculas = filterArrays(peliculas, (categoria = "Comedia"));
    crearSeccion(arrayPeliculas, "Comedia");
  }
})();

(function () {
  const user = JSON.parse(localStorage.getItem("usuario"));
  let isLog = localStorage.getItem("log");
  const header = document.querySelector("#header");
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-dark", "bg-dark", "navbar-expand-md");
  nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("cerrarSesion")) {
      isLog = false;
      localStorage.setItem("log", isLog);
      window.location.href = "../index.html";
    }
  });
  if (isLog === "true") {
    if (user.rol === "user") {
      nav.innerHTML = navUsuario(user);
      header.append(nav);
      return;
    } else {
      nav.innerHTML = navAdmin(user);
      header.append(nav);
      return;
    }
  } else {
    nav.innerHTML = navSinUsuario(user);
    header.append(nav);
    return;
  }
})();
