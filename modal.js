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
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".close");

// Pourquoi ???
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// reset modal display
function resetModalDisplay() {
  if(document.querySelector(".congratulation") !== null) {
    form.hidden = false;
    document.querySelector(".congratulation").remove();
  }
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
  form.reset();
  resetModalDisplay();
}





