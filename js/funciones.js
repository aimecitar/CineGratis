(function destacadas() {
  const peliculas = JSON.parse(localStorage.getItem("peliculas"));
  const section = document.querySelector(".categorias");
  if (peliculas.some((pelicula) => pelicula.destacada === true)) {
    const arrayPeliculas = peliculas.slice(0, 6);
    crearSeccion(arrayPeliculas, (categoria = "Destacadas"));
  }
  if (peliculas.some((pelicula) => pelicula.category === "Drama")) {
    const arrayPeliculas = filterArrays(peliculas, (categoria = "Drama"));
    crearSeccion(arrayPeliculas, (categoria = "Drama"));
  }
  if (peliculas.some((pelicula) => pelicula.category === "Terror")) {
    const arrayPeliculas = filterArrays(peliculas, (categoria = "Terror"));
    crearSeccion(arrayPeliculas, (categoria = "Terror"));
  }
  if (peliculas.some((pelicula) => pelicula.category === "Comedia")) {
    const arrayPeliculas = filterArrays(peliculas, (categoria = "Comedia"));
    crearSeccion(arrayPeliculas, (categoria = "Comedia"));
  }
})();

function filterArrays(peliculas, categoria) {
  const arraycategoria = peliculas.filter(
    (pelicula) => pelicula.category === categoria
  );
  const arraySeccion = arraycategoria.slice(0, 6);
  return arraySeccion;
}

function crearSeccion(arrayPeliculas, categoria) {
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
