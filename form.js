const form = document.getElementsByTagName("form")[0];

// DOM Elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const Birthdate = document.getElementById('birthdate');
const tournamentCount = document.getElementById('quantity');

// Inputs Tests

form.addEventListener('submit', function (event){
  formValid(event);
});

function formValid (event) {

  const isValidFirstName = firstName.value.trim().length >=2;
  const isValdiLastName = lastName.value.trim().length >=2;
  const isValidEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email.value);

  if (isValidFirstName && isValdiLastName && isValidEmail){
    
    alert("Formulaire envoyé");

  } else {
    
    if (!isValidFirstName){
      firstName.parentElement.setAttribute("data-error-visible", "true");
      firstName.parentElement.setAttribute("data-error", "Champ invalide")
      firstName.addEventListener('input', function (event) {
        if (event.target.value.trim().length >= 2) {
            event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    
    if (!isValdiLastName){
      lastName.parentElement.setAttribute("data-error-visible", "true");
      lastName.parentElement.setAttribute("data-error", "Champ invalide");
      lastName.addEventListener('input', function(event){
        if (event.target.value.trim().length >=2){
          lastName.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    
    if (!isValidEmail){
      email.parentElement.setAttribute("data-error-visible", "true");
      email.parentElement.setAttribute("data-error", "Champ invalide");
      email.addEventListener('input', function(event){
        if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(event.target.value)){
          email.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    event.preventDefault();
  }
}

