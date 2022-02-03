function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
console.log(modalbg);
const modalBtn = document.querySelectorAll(".modal-btn");
console.log(modalBtn);
const modalBtnClose = document.querySelectorAll(".close");
console.log(modalBtnClose);

// Pourquoi ???
const formData = document.querySelectorAll(".formData");
console.log(formData);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal(){
  modalbg.style.display = "none";

}




