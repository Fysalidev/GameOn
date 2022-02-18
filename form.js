// DOM Element
const form = document.getElementsByTagName("form")[0];
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournamentCount = document.getElementById("quantity");
const citys = document.querySelectorAll(".checkbox-input[name=location]");
const locationRadio = document.getElementById("location1");
const terms = document.getElementById("checkbox1");

// Event

form.addEventListener("submit", function (event) {
  formValid(event);
});

// Inputs validation

/**
 * Input firstName & lastName Validation
 * @param {DOM Element Input} input
 * @returns {boolean}
 */
function isValidName(input) {
  const nameLength = input.value.trim().length >= 2;
  const nameRegex =
    /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/.test(
      input.value
    );
  return (isValid = nameLength && nameRegex ? true : false);
}

/**
 * Input Email Validation
 * @param {DOM Element Input} input
 * @returns {boolean}
 */
function isValidEmail(input) {
  return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(input.value);
}

/**
 * Input Birthdate Validation
 * @param {DOM Element Input} input
 * @returns {boolean}
 */
function isValidBirthdate(input) {
  return /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(input.value);
}

/**
 * Input TournamentCount Validation
 * @param {DOM Element} input
 * @returns {boolean}
 */
function isValidTournament(input) {
  return /^[1-9]{0,1}[0-9]$/.test(input.value);
}

/**
 * Input Location Validation
 * @param {array} inputs
 * @returns {boolean}
 */
function isValidLocation(inputs) {
  let isValid = false;

  for (let i = 0; i < inputs.length; i++) {
    if (citys[i].checked) {
      isValid = true;
    }
  }

  return isValid;
}

/**
 * Input Item Validation
 * @param {DOM Element Input} input
 * @returns {boolean}
 */
function isValidItem(input) {
  const isValid = input.checked ? true : false;
  return isValid;
}

// Form Validation

/**
 * Validation du formulaire
 * @param {Event} event
 *
 */
function formValid(event) {
  const firstNameIsValid = isValidName(firstName);
  const lastNameIsValid = isValidName(lastName);
  const emailIsValid = isValidEmail(email);
  const birthdateIsValid = isValidBirthdate(birthdate);
  const tournamentIsValid = isValidTournament(tournamentCount);
  const locationIsValid = isValidLocation(citys);
  const termsIsValid = isValidItem(terms);

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    birthdateIsValid &&
    tournamentIsValid &&
    locationIsValid &&
    termsIsValid
  ) {
    event.preventDefault();

    form.hidden = true;

    let modalBody = document.querySelector(".modal-body");
    let newDiv = document.createElement("div");
    let p = document.createElement("p");
    let btn = document.createElement("button");

    newDiv.classList.add("congratulation");
    p.innerHTML = "Merci pour votre inscription";

    btn.innerHTML = "Fermer";
    btn.classList.add("btn-submit");
    btn.addEventListener("click", () => {
      resetModalDisplay();
      closeModal();
    });

    newDiv.appendChild(p);
    newDiv.appendChild(btn);
    modalBody.appendChild(newDiv);
  } else {
    if (!firstNameIsValid) {
      firstName.parentElement.setAttribute("data-error-visible", "true");
      firstName.parentElement.setAttribute(
        "data-error",
        "Veuillez entrer 2 caractères ou plus pour le champ du Prénom"
      );
      firstName.addEventListener("input", function (event) {
        if (isValidName(event.target)) {
          event.target.parentElement.setAttribute(
            "data-error-visible",
            "false"
          );
        }
      });
    }

    if (!lastNameIsValid) {
      lastName.parentElement.setAttribute("data-error-visible", "true");
      lastName.parentElement.setAttribute(
        "data-error",
        "Veuillez entrer 2 caractères ou plus pour le champ du Nom"
      );
      lastName.addEventListener("input", function (event) {
        if (isValidName(event.target)) {
          event.target.parentElement.setAttribute(
            "data-error-visible",
            "false"
          );
        }
      });
    }

    if (!emailIsValid) {
      email.parentElement.setAttribute("data-error-visible", "true");
      email.parentElement.setAttribute(
        "data-error",
        "Veuillez vérifier votre email"
      );
      email.addEventListener("input", function (event) {
        if (isValidEmail(event.target)) {
          event.target.parentElement.setAttribute(
            "data-error-visible",
            "false"
          );
        }
      });
    }

    if (!birthdateIsValid) {
      birthdate.parentElement.setAttribute("data-error-visible", "true");
      birthdate.parentElement.setAttribute(
        "data-error",
        "Vous devez entrer votre date de naissance"
      );
      birthdate.addEventListener("input", function (event) {
        if (isValidBirthdate(event.target)) {
          event.target.parentElement.setAttribute(
            "data-error-visible",
            "false"
          );
        }
      });
    }

    if (!tournamentIsValid) {
      tournamentCount.parentElement.setAttribute("data-error-visible", "true");
      tournamentCount.parentElement.setAttribute(
        "data-error",
        "Vous devez indiquer un nombre de tournois"
      );

      tournamentCount.addEventListener("input", function (event) {
        if (isValidTournament(event.target)) {
          event.target.parentElement.setAttribute(
            "data-error-visible",
            "false"
          );
        }
      });
    }

    if (!tournamentIsValid) {
      locationRadio.parentElement.setAttribute("data-error-visible", "true");
      locationRadio.parentElement.setAttribute(
        "data-error",
        "Vous devez choisir un tournoi"
      );
      for (let i = 0; i < citys.length; i++) {
        citys[i].addEventListener("input", function (event) {
          if (isValidItem(event.target)) {
            event.target.parentElement.setAttribute(
              "data-error-visible",
              "false"
            );
          }
        });
      }
    }

    if (!termsIsValid) {
      if (!tournamentIsValid) {
        terms.parentElement.setAttribute("data-error-visible", "true");
        terms.parentElement.setAttribute(
          "data-error",
          "Vous devez accepter les conditions d'utilisation"
        );
        terms.addEventListener("input", function (event) {
          if (isValidItem(event.target)) {
            event.target.parentElement.setAttribute(
              "data-error-visible",
              "false"
            );
          }
        });
      }
    }

    event.preventDefault();
  }
}
