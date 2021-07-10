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
