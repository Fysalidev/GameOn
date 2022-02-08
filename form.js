const form = document.getElementsByTagName("form")[0];

// DOM Element
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentCount = document.getElementById('quantity');

/**
 * Validation Input firstName & lastName
 * @param {DOM Element Input} input 
 * @returns {boolean}
 */

function isValidName(input){
  return input.value.trim().length >=2;
}

/**
 * Validation Input Email
 * @param {DOM Element Input} input 
 * @returns {boolean}
 */

function isValidEmail(input){
  return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(input.value);

}

/**
 * Validation input birthdate
 * @param {DOM Element Input} input 
 * @returns {boolean}
 */

function isValidBirthdate(input) {
  return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(input.value);
}

/**
 * Validation input TournamentCount
 * @param {DOM Element Input} input 
 * @returns {boolean}
 */

function isValidTounamentCount(input){
  return /^(0|[1-9][0-9]?|99)$/.test(input.value);
}

form.addEventListener('submit', function (event){
  formValid(event);
});

/**
 * Validation du formulaire
 * @param {Event} event 
 * 
 */

function formValid (event) {
  
  const isValidFirstName = isValidName(firstName);
  alert ("first : ".isValidFirstName);
  const isValdiLastName = isValidName(lastName);
  alert ("last : ".isValdiLastName);
  const isValidEmail = isValidEmail(email);
  alert("email : ".isValidEmail);
  const isValidBirthdate = isValidBirthdate(birthdate);
  alert("birthdate : ".isValidBirthdate);
  const isValidTounamentCount = isValidTounamentCount(tournamentCount);
  alert("tournemantCount".isValidTounamentCount);
  
  if (isValidFirstName && isValdiLastName && isValidEmail && isValidBirthdate && isValidTounamentCount){
    
    alert("Formulaire envoyé");
    
  } else {
    
    if (!isValidFirstName){
      firstName.parentElement.setAttribute("data-error-visible", "true");
      firstName.parentElement.setAttribute("data-error", "Champ invalide")
      firstName.addEventListener('input', function (event) {
        if (isValidName(event.target)) {
          event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    
    if (!isValdiLastName){
      lastName.parentElement.setAttribute("data-error-visible", "true");
      lastName.parentElement.setAttribute("data-error", "Champ invalide");
      lastName.addEventListener('input', function(event){
        if (isValidName(event.target)){
          event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    
    if (!isValidEmail){
      email.parentElement.setAttribute("data-error-visible", "true");
      email.parentElement.setAttribute("data-error", "Champ invalide");
      email.addEventListener('input', function(event){
        if (isValidEmail(event.target)){
          event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    
    if (!isValidBirthdate){
      birthdate.parentElement.setAttribute("data-error-visible", "true");
      birthdate.parentElement.setAttribute("data-error", "Champ invalide");
      birthdate.addEventListener('input', function(event){
        if (isValidBirthdate(event.target)){
          event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    
    if (!isValidTounamentCount){
      tournamentCount.parentElement.setAttribute("data-error-visible", "true");
      tournamentCount.parentElement.setAttribute("data-error", "Champ invalide");
      tournamentCount.addEventListener('input', function(event){
        if (isValidTounamentCount(event.target)){
          event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    event.preventDefault();
  }
}




