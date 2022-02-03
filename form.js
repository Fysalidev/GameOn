const form = document.getElementsByTagName("form")[0];

let first = document.getElementById('first');
let firstErrorMessage = document.querySelector('.firstErrorMessage');

let last = document.getElementById('last');
let lastErrorMessage = document.querySelector('.lastErrorMessage');

let email = document.getElementById('email');
let emailErrorMessage = document.querySelector('.emailErrorMessage');

let date = document.getElementById('birthdate');
console.log(date);
let dateErrorMessage = document.querySelector('.dateErreurMessage');
console.log(dateErrorMessage);


first.addEventListener("input", function () {
  if (first.validity.valid) {
    firstErrorMessage.innerHTML = "";
    /* firstErrorMessage.className = "FirstErrorMessage"; */
  }
});

last.addEventListener("input", function (event) {
  if (last.validity.valid) {
    lastErrorMessage.innerHTML = "";
    /* lastErrorMessage.className = "lastErrorMessage"; */
  }
});

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailErrorMessage.innerHTML = "";
    /* emailErrorMessage.className = "emailErrorMessage"; */
  }
});

date.addEventListener("input", function (event) {
  if (date.validity.valid) {
    dateErrorMessage.innerHTML = "";
    /* emailErrorMessage.className = "emailErrorMessage"; */
  }
});

form.addEventListener("submit", function (event) {
  if (!first.validity.valid) {
    firstErrorMessage.innerHTML = "first Message Error";
    /* firstErrorMessage.className = "firstErrorMessage active"; */
    event.preventDefault();
    alert("FirstName non valide");
  }

  if (!last.validity.valid) {
    lastErrorMessage.innerHTML = "first Message Error";
    /* lastErrorMessage.className = "LastErrorMessage active"; */
    event.preventDefault();
    alert("LastName non valide");
  }

  if (!email.validity.valid) {
    emailErrorMessage.innerHTML = "email Message Error";
    /* emailErrorMessage.className = "emailErrorMessage active"; */
    event.preventDefault();
    alert("email non valide");
  }
    console.log(date.validity.valid);
    if (!date.validity.valid) {
    dateErrorMessage.innerHTML = "Birthdate Message Error";
    /* emailErrorMessage.className = "emailErrorMessage active"; */
    event.preventDefault();
    alert("date non valide");
  }

});