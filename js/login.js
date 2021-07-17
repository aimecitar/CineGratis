const loginSection = document.querySelector("#loginSection");
const loginForm = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//La contraseña debe tener entre 8 y 16 caracteres, al menos una mayuscula, una minuscula y un numero
const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,30}$/;

let userTest = [{
  email : 'aime@gmail.com',
  password : 'Aime45678',
}]

localStorage.setItem('totalUsers', JSON.stringify(userTest));


submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
});

eventListener();
function eventListener() {
  //Campos del formulario
  email.addEventListener("blur", checkInputs);
  password.addEventListener("blur", checkInputs);
  submitBtn.addEventListener("submit", validation);
}

function checkInputs(e) {
  // trim to remove the whitespaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (e.target.type === "email") {
    deleteMessage();

    if (emailRegex.test(e.target.value)) { //AQUÍ DEBERIA BUSCAR DEL LOCAL STORAGE
      setSuccessFor(email, "Email correcto");
    } else if (e.target.value < 1) {
      setErrorFor(email, "Este campo es obligatorio");
    } else {
      setErrorFor(email, "Email Incorrecto");
    }
  }

  if (e.target.type === "password") {
    deleteMessage();
    if (passwordRegex.test(e.target.value)) { //same aqui
      setSuccessFor(password, "Constraseña correcta");
    } else if (e.target.value <= 0) {
      setErrorFor(password, "La contraseña no puede estar en blanco");
    } else {
      setErrorFor(
        password,
        "La contraseña debe coincidir con el usuario "
      );
    }
  }
}

//Funciones que ejecutan el mensaje de ERROR o Exito
function setErrorFor(input, message) {
  const small = document.createElement("small");
  small.innerText = message;
  const formControl = input.parentElement;
  formControl.append(small);
  small.classList.add("small-error");
  input.classList.add("border-error");
}

function setSuccessFor(input, message) {
  input.classList.remove("border-error");
  input.classList.add("border-success");
  const small = document.createElement("small");
  small.innerText = message;
  const formControl = input.parentElement;
  formControl.append(small);
  small.classList.add("small-success");
}

//funcion para eliminar los small de errores/exitos
function deleteMessage() {
  const small = document.querySelector("small");
  if (small) {
    small.remove();
  }
}

function deleteBorder() {
  let inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("border-success");
  }
}

//validar
function validation(e) {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("totalUsers")) || [];
  console.log(users);
  const email = emailInput.value;
  const password = passwordInput.value;
  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );
  const adminFound = admin.find(
    (admin) => admin.email === email && admin.password === password
  );

  if (adminFound) {
    window.location.href = "..";
    logedAdmin = adminFound;
    localStorage.setItem("logedAdmin", JSON.stringify(logedAdmin));
  } else if (userFound) {
    window.location.href = "index.html";
    logedUser = userFound;
    localStorage.setItem("logedUser", JSON.stringify(logedUser));
  } else {
    const row = `
        <div class="alert alert-danger alert-dismissible" role="alert" >
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Error!</strong> Usuario y/o contraseña erroneos!
    </div>
    `;
    loginError.innerHTML = row;
  }
}

const isLog = true;
localStorage.setItem('log', isLog);

//MODAL

/*
const emailForgot = querySelector('#email-recovery-pass');
const forgotPassBtn = querySelector('#submitBtnPassword');
const forgotForm = querySelector('#pass-form-recovery-pass');

forgotPassBtn.addEventListener("submit", (e) => {
  e.preventDefault();
});

eventListener();
function eventListener() {
  emailForgot.addEventListener("blur", checkEmail);
  forgotPassBtn.addEventListener("submit", recovery);
}

function checkEmail(e) {
  // trim to remove the whitespaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (e.target.type === "email") {
    deleteMessage();

    if (emailRegex.test(e.target.value)) {
      //AQUÍ DEBERIA BUSCAR DEL LOCAL STORAGE
      setSuccessFor(email, "Email correcto");
    } else if (e.target.value < 1) {
      setErrorFor(email, "Este campo es obligatorio");
    } else {
      setErrorFor(email, "Email Incorrecto");
    }
  }

}

setErrorFor();
setSuccessFor();
deleteMessage();
deleteBorder();

function recovery
//si el email esta registrado habilitar que se envíe email y mostrar un alert que diga que enviamos las instrucciones a tu mail
//si el email no esta registrado mostrar un alert que diga: ud no está registrado y un link de registrarse
*/