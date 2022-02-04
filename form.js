const form = document.getElementsByTagName("form")[0];

// Inputs Elements

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');

// Error Message Elements
const firstNameError = document.querySelector('.firstError');
const lastNameError = document.querySelector('.lastError')


// Validations

function nameValid(firstOrLast){
  return firstOrLast.trim().length >= 2;
}

// inputs event

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

// Inputs Validation Form

function firstNameValidation(){
  
  const firstNameIsValid = nameValid(firstName.value);
 
  if (!firstNameIsValid){
    firstNameError.innerHTML = "2 caractères minimum";
  }

  return firstNameIsValid;

}

function lastNameValidation(){
  
  const lastNameIsValid = nameValid(lastName.value);
  console.log(lastNameIsValid);
  alert("stop");
 
  if (!lastNameIsValid){
    lastNameError.innerHTML = "2 caractères minimum";
  }

  return lastNameIsValid;
}

function emailValdiation(){
  const email = document.getElementById('email').value;
  const emailError = document.querySelector('.emailError');
  
}

function birthdateValidation(){
  const Birthdate = document.getElementById('birthdate').value;
  const BirthdateError = document.querySelector('.birthdateError');

}

function tournamentCountValidation(){
  const tournamentCount = document.getElementById('quantity').value;
  const tournamentCountError = document.querySelector('.quantityError');
}


function tournamentLocationValidation(){

}

// Voir ici la validation des checkbox

// Form event

form.addEventListener('submit', function(event){
  
  if (!firstNameValidation() || !lastNameValidation()){
    event.preventDefault();
  }

});
