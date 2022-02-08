// DOM Element
const form = document.getElementsByTagName("form")[0];
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentCount = document.getElementById('quantity');

// Event

form.addEventListener('submit', function (event){
  formValid(event);
});

// Inputs validation

/**
 * Input firstName & lastName Validation
 * @param {DOM Element Input} input 
 * @returns {boolean}
 */
function isValidName(input){
  return input.value.trim().length >=2;
}

/**
 * Input Email Validation
 * @param {DOM Element Input} input 
 * @returns {boolean}
 */
function isValidEmail(input){
  return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(input.value);
}

// Form Validation

/**
 * Validation du formulaire
 * @param {Event} event 
 * 
 */
function formValid (event) {
  
  const firstNameIsValid = isValidName(firstName);
  const lastNameIsValid = isValidName(lastName);
  const emailIsValid = isValidEmail(email);
  
  if (firstNameIsValid && lastNameIsValid && emailIsValid){
    
    alert("Formulaire envoyé");
    
  } else {
    
    if (!firstNameIsValid){
      firstName.parentElement.setAttribute("data-error-visible", "true");
      firstName.parentElement.setAttribute("data-error", "Champ invalide")
      firstName.addEventListener('input', function (event) {
        if (isValidName(event.target)) {
          event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    
    if (!lastNameIsValid){
      lastName.parentElement.setAttribute("data-error-visible", "true");
      lastName.parentElement.setAttribute("data-error", "Champ invalide");
      lastName.addEventListener('input', function(event){
        if (isValidName(event.target)){
          event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }
    
    if (!emailIsValid){
      email.parentElement.setAttribute("data-error-visible", "true");
      email.parentElement.setAttribute("data-error", "Champ invalide");
      email.addEventListener('input', function(event){
        if (isValidEmail(event.target)){
          event.target.parentElement.setAttribute("data-error-visible", "false");
        } 
      })
    }

    event.preventDefault();
        
  }
}




