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
