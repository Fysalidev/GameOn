const form = document.getElementsByTagName("form")[0];

// DOM Elements
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const Birthdate = document.getElementById('birthdate');
const tournamentCount = document.getElementById('quantity');
const firstName = document.getElementById('first');

/**
 * 
 * @param {Element} input 
 * @param {string} err 
 */
function alertInputOn (input, err ) {
  
  input.parentElement.setAttribute("data-error-visible", "true");
  input.parentElement.setAttribute("data-error", err);
  
}

/**
 * Validation du formulaire soumis
 * @param {event} e 
 */
function formValid(e) {
  
  alert("C'est parti");
  let isValidFirstName = firstName.value.trim().length >= 2;
  if (!isValidFirstName) {
    alertInputOn(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  }

  let isValdiLastName = lastName.value.trim().length >= 2;
  if (!isValdiLastName) {
    alertInputOn(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  
  }
  
  let isValidEmail = /^e[0-9]{3,}$/.test(email.value);
  if (!isValidEmail) {
    alertInputOn(email, "Adresse email invalide");
  
  }
  
  if (isValidFirstName && isValdiLastName && isValidEmail){
    alert("Afficher le message de confirmation")
  } else {
    e.preventDefault();
  }

}

form.addEventListener("submit", function (event){
  formValid(event);
});