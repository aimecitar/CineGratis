const circle1 = document.querySelector("#team-1");
const circle2 = document.querySelector("#team-2");
const circle3 = document.querySelector("#team-3");

circle1.addEventListener("click", createCard);
circle2.addEventListener("click", createCard);
circle3.addEventListener("click", createCard);

function prueba(e) {
  console.log("hola mundo", e.target.alt);
}

function createCard(e) {
  console.log("hola mundo");

  let identifier;
  if ("Francisco" === e.target.alt) {
    identifier = 0;
  } else if ("Gaston" === e.target.alt) {
    identifier = 1;
  } else {
    identifier = 2;
  }
  const infoContainer = document.querySelector(".info-container");
  const card = document.createElement("div");
  infoContainer.innerHTML = "";
  card.innerHTML = `
        <img class="profile" id="profile" src="${integrantes[identifier].imagen}" alt="" />
        <div class="info">
          <h2 class="name" id="name">${integrantes[identifier].name}</h2>
          <h3 class="status" id="status">Rolling Code Student</h3>
          <p class="about" id="about">
            ${integrantes[identifier].about}
          </p>
        </div>
  `;
  infoContainer.append(card);
}

const integrantes = [
  {
    name: "Francisco Merchán",
    imagen: "../assets/about_us/team-1.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt sit, ex eaque ipsum qui quas animi magni accusantium illum, aliquid quo dolorem quisquam et sapiente, vero distinctio at minus!",
  },
  {
    name: "Gastón Paz",
    imagen: "../assets/about_us/team-2.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt sit, ex eaque ipsum qui quas animi magni accusantium illum, aliquid quo dolorem quisquam et sapiente, vero distinctio at minus!",
  },
  {
    name: "Aimé Saracho",
    imagen: "../assets/about_us/team-3.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt sit, ex eaque ipsum qui quas animi magni accusantium illum, aliquid quo dolorem quisquam et sapiente, vero distinctio at minus!",
  },
];
