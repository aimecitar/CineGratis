import { navUsuario, navAdmin, navSinUsuario } from "./funciones.js";

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
