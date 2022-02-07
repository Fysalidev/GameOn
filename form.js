const form = document.getElementsByTagName("form")[0];

// Inputs Elements

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');

// Error Message Elements
const firstNameError = document.querySelector('.firstError');
const lastNameError = document.querySelector('.lastError')


// Inputs Tests

/**
 * Description de la fonction
 * @param {string} firstOrLastName 
 * @returns {boolean}
 */

function nameValid(firstOrLastName){
  return firstOrLastName.trim().length >= 2;

}

function firstNameIsValid(){
  const firstNameIsValid = nameValid(firstName.value);
  
  if (!firstNameIsValid){
    firstNameError.innerHTML = "2 caractères minimum";
  } 

  return firstNameIsValid;

}

function lastNameIsValid(){
  const lastNameIsValid = nameValid(lastName.value);

  if (!lastNameIsValid){
    lastNameError.innerHTML = "2 caractères minimum";
  }

  return lastNameIsValid;
}



// Validation du formulaire & message d'erreur

function formIsValid() {

  let formIsValid = false;
  const first = firstNameIsValid();
  const name = lastNameIsValid();

  // Validation des email
  const email = document.getElementById('email').value;
  const emailError = document.querySelector('.emailError');

  // Validation date de naissance
  const Birthdate = document.getElementById('birthdate').value;
  const BirthdateError = document.querySelector('.birthdateError');

  // Validation du nombre de tournois
  const tournamentCount = document.getElementById('quantity').value;
  const tournamentCountError = document.querySelector('.quantityError');

  // validation d'une ville


  // Validation des checkbox...

  if (first && name) {
    formIsValid = true;

  }

  return formIsValid;

}

form.addEventListener('submit', function(event){
  
  if (!formIsValid()){
    event.preventDefault();
  }

  // Prevoir d'insérer la pages ici...

});

// inputs event => Reset des messages d'erreur

firstName.addEventListener('input', function(event){

  if(nameValid(event.target.value)){
    firstNameError.innerHTML = "";
  }

})

lastName.addEventListener('input', function(event){

  if(nameValid(event.target.value)){
    lastNameError.innerHTML = "";
  }
  
})