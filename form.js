const form = document.getElementsByTagName("form")[0];
console.log(form);

let first = document.getElementById('first');
let firstErrorMessage = document.querySelector('.firstErrorMessage');

let last = document.getElementById('last');
let lastErrorMessage = document.querySelector('.lastErrorMessage');

let email = document.getElementById('email');
let emailErrorMessage = document.querySelector('.emailErrorMessage');


first.addEventListener("input", function () {
  if (first.validity.valid) {
    firstErrorMessage.innerHTML = ""; // On réinitialise le contenu
    firstErrorMessage.className = "FirstErrorMessage"; // On réinitialise l'état visuel du message
  }
});

last.addEventListener("input", function (event) {
  if (last.validity.valid) {
    lastErrorMessage.innerHTML = ""; // On réinitialise le contenu
    lastErrorMessage.className = "lastErrorMessage"; // On réinitialise l'état visuel du message
  }
});

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailErrorMessage.innerHTML = ""; // On réinitialise le contenu
    emailErrorMessage.className = "emailErrorMessage"; // On réinitialise l'état visuel du message
  }
});

form.addEventListener("submit", function (event) {
  if (!first.validity.valid) {
    firstErrorMessage.innerHTML = "first Message Error";
    firstErrorMessage.className = "firstErrorMessage active";
    event.preventDefault();
    alert("FirstName non valide");
  }

  if (!last.validity.valid) {
    lastErrorMessage.innerHTML = "first Message Error";
    lastErrorMessage.className = "LastErrorMessage active";
    event.preventDefault();
    alert("LastName non valide");
  }

  if (!email.validity.valid) {
    emailErrorMessage.innerHTML = "email Message Error";
    emailErrorMessage.className = "emailErrorMessage active";
    event.preventDefault();
    alert("email non valide");
  }
});