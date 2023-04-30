window.addEventListener("load", function () {
  var nameSignUp = document.getElementById("name");
  var lastNameSignUp = document.getElementById("lastName");
  var dniSignUp = document.getElementById("dni");
  var dateOfBirthSignUp = document.getElementById("date");
  var phoneNumberSignUp = document.getElementById("phone");
  var adressSignUp = document.getElementById("adress");
  var locationSignUp = document.getElementById("location");
  var postalCodeSignUp = document.getElementById("postal");
  var emailSignUp = document.getElementById("emailSignUp");
  var passwordSignUp = document.getElementById("passwordSignUp");
  var repeatPasswordSignUp = document.getElementById("repeatPassword");
  var formRegister = document.getElementById("formRegister");
  var errorName = document.getElementById("errorName");
  var errorLastName = document.getElementById("errorLastName");
  var errorDni = document.getElementById("errorDni");
  var errorPhone = document.getElementById("errorPhone");
  var errorAdress = document.getElementById("errorAdress");
  var errorLocation = document.getElementById("errorLocation");
  var errorPostal = document.getElementById("errorPostal");
  var errorEmailSignUp = document.getElementById("errorEmailSignUp");
  var errorPassword = document.getElementById("errorPassword");
  var textErrorLetters = "*Must have more than 3 letters";
  var textErrorCharacter = "*Only accepts letters";
  var errorPasswordRepeat = document.getElementById("errorPasswordRepeat");
  nameSignUp.addEventListener("blur", function () {
    validateNameLastname(nameSignUp, errorName);
  });
  //NAME
  function validateNameLastname(maxLength, spanError) {
    var long = maxLength.value;
    if (long.length < 3) {
      spanError.textContent = textErrorLetters;
      return;
    }
    var onlyLetters = true;
    for (i = 0; i < long.length; i++) {
      var charCode = long.charCodeAt(i);
      if (
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122)
      ) {
        onlyLetters = false;
        break;
      }
    }
    if (!onlyLetters) {
      spanError.textContent = textErrorCharacter;
      return;
    }
  }
  nameSignUp.addEventListener("focus", function () {
    errorName.textContent = "";
  });
  lastNameSignUp.addEventListener("blur", function () {
    validateNameLastname(lastNameSignUp, errorLastName);
  });
  lastNameSignUp.addEventListener("focus", function () {
    errorLastName.textContent = "";
  });
  dniSignUp.addEventListener("blur", validateDni);
  //DNI
  function validateDni() {
    var dni = dniSignUp.value;
    if (dni.length < 7) {
      errorDni.textContent = "*Must have more than 7 numbers";
      return;
    }
    var onlyNumbers = true;
    for (i = 0; i < dni.length; i++) {
      var charCode = dni.charCodeAt(i);
      if (!(charCode >= 48 && charCode <= 57)) {
        onlyNumbers = false;
        break;
      }
    }
    if (!onlyNumbers) {

      errorDni.textContent = "*Only accepts numbers";
      return;
    }
  }
  dniSignUp.addEventListener("focus", function () {
    errorDni.textContent = "";
  });
  phoneNumberSignUp.addEventListener("blur", validatePhone);
  //VALIDATE PHONE
  function validatePhone() {
    var phone = phoneNumberSignUp.value;
    if (!(phone.length === 10)) {
      errorPhone.textContent = "*Must have 10 numbers";
      return;
    }
    var onlyNumbers = true;
    for (i = 0; i < phone.length; i++) {
      var charCode = phone.charCodeAt(i);
      if (!(charCode >= 48 && charCode <= 57)) {
        onlyNumbers = false;
        break;
      }
    }
    if (!onlyNumbers) {
      errorPhone.textContent = "*Only accepts numbers";
      return;
    }
  }
  phoneNumberSignUp.addEventListener("focus", function () {
    errorPhone.textContent = "";
  });
  locationSignUp.addEventListener("blur", validateLocation);
  //VALIDATE LOCATION
  function validateLocation() {
    var long = locationSignUp.value;
    if (long.length < 3) {
      errorLocation.textContent = textErrorLetters;
      return;
    }
    var onlyNumbersandLetters = true;
    for (i = 0; i < long.length; i++) {
      var charCode = long.charCodeAt(i);
      if (
        !(charCode >= 48 && charCode <= 57) &&
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122)
      ) {
        onlyNumbersandLetters = false;
        break;
      }
    }
    if (!onlyNumbersandLetters) {
      errorLocation.textContent = "*Only accepts numbers and letters";
      return;
    }
  }
  locationSignUp.addEventListener("focus", function () {
    errorLocation.textContent = "";
  });
  postalCodeSignUp.addEventListener("blur", validatePostal);
  //VALIDATE POSTAL CODE
  function validatePostal() {
    var long = postalCodeSignUp.value;
    if (long.length < 4 || long.length > 5) {
      errorPostal.textContent = "*Must have 4 at 5 numbers";
      return;
    }
    var onlyNumbers = true;
    for (i = 0; i < long.length; i++) {
      var charCode = long.charCodeAt(i);
      if (!(charCode >= 48 && charCode <= 57)) {
        onlyNumbers = false;
        break;
      }
    }
    if (!onlyNumbers) {
      errorPostal.textContent = "*Only accepts numbers";
      return;
    }
  }
  postalCodeSignUp.addEventListener("focus", function () {
    errorPostal.textContent = "";
  });

  emailSignUp.addEventListener("blur", validateEmail);
  function validateEmail() {
    var email = emailSignUp.value.trim();
    var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      errorEmailSignUp.textContent = "*Enter a valid email address.";
      return;
    }
  }
  emailSignUp.addEventListener("focus", function () {
    errorEmailSignUp.textContent = "";
  });
  passwordSignUp.addEventListener("blur", function () {
    validatePassword(passwordSignUp, errorPassword);
  });
  //VALIDATE PASSWORD
  function validatePassword(passwordInput, error) {
    var password = passwordInput.value;
    // PASSWORD LENGTH
    if (password.length < 8) {
      error.textContent = "*The password must be at least 8 characters.";
      return;
    }
    //NUMERIC CHARACTER
    var number = 0;
    for (i = 0; i < password.length; i++) {
      var charCode = password.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        number++;
      }
    }
    if (number < 2) {
      error.textContent =
        "*The password must contain at least 2 numeric characters.";
      return;
    }
    // SPECIAL CHARACTER
    var specialCharacter = 0;
    for (i = 0; i < password.length; i++) {
      var charCode = password.charCodeAt(i);
      if (
        (charCode >= 33 && charCode <= 47) ||
        (charCode >= 58 && charCode <= 64) ||
        (charCode >= 91 && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)
      ) {
        specialCharacter++;
      }
    }
    if (specialCharacter < 1) {
      error.textContent =
        "*The password must contain at least 1 special character.";
      return;
    }
    // UPPERCASE LETTERS
    let upperCase = 0;
    for (let i = 0; i < password.length; i++) {
      var charCode = password.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        upperCase++;
      }
    }
    if (upperCase < 1) {
      error.textContent =
        "*The password must contain at least 1 capital letter.";
      return;
    }
    //LOWERCASE LETTERS
    var lowerCase = 0;
    for (i = 0; i < password.length; i++) {
      var charCode = password.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        lowerCase++;
      }
    }
    if (lowerCase < 1) {
      error.textContent =
        "*The password must contain at least 1 lowercase letter.";
      return;
    }
  }
  passwordSignUp.addEventListener("focus", function () {
    errorPassword.textContent = "";
  });
  //VALIDATE REPEAT PASSWORD
  repeatPasswordSignUp.addEventListener("blur", repeatPassword);
  function repeatPassword() {
    var passwordRepeat = repeatPasswordSignUp.value;
    var password = passwordSignUp.value;
    if (!(passwordRepeat === password)) {
      errorPasswordRepeat.textContent = "*The password must match";
      return;
    }
  }
  repeatPasswordSignUp.addEventListener("focus", function () {
    errorPasswordRepeat.textContent = "";
  });
  adressSignUp.addEventListener("blur", validateAdress);

  function validateAdress() {
    var adress = adressSignUp.value;
    if (adress.length < 5) {
      errorAdress.textContent = "*Must be at least 5 characters.";
      return;
    }
    var position = Math.round(adress.length / 2) - 1;
    if (adress.charAt(position) !== " ") {
      errorAdress.textContent = "*Needs a space in the middle";
    }
  }
  adressSignUp.addEventListener("focus", function () {
    errorAdress.textContent = "";
  });

  formRegister.addEventListener("submit", validateForm);

  function validateForm() {
    validateAdress();
    validateDni();
    validateEmail();
    validateLocation();
    validateNameLastname(nameSignUp, errorName);
    validateNameLastname(lastNameSignUp, errorLastName);
    validatePassword(passwordSignUp, errorPassword);
    validatePhone();
    validatePostal();

    if (
      errorName.textContent === "" &&
      lastNameSignUp.textContent === "" &&
      errorDni.textContent === "" &&
      errorPhone.textContent === "" &&
      errorAdress.textContent === "" &&
      errorLocation.textContent === "" &&
      errorPostal.textContent === "" &&
      errorEmailSignUp.textContent === "" &&
      errorPassword.textContent === "" &&
      errorPasswordRepeat.textContent === ""
    ) {
      alert(
        "The name is: " +
          nameSignUp.value +
          "\nThe last name is: " +
          lastNameSignUp.value +
          "\nThe DNI is: " +
          dniSignUp.value +
          "\nThe phone is: " +
          phoneNumberSignUp.value +
          "\nThe adress is: " +
          adressSignUp.value +
          "\nThe location is: " +
          locationSignUp.value +
          "\nThe postal code is: " +
          postalCodeSignUp.value +
          "\nThe email is: " +
          emailSignUp.value +
          "\nThe password is: " +
          passwordSignUp.value +
          "\nThe date of birth" +
          dateOfBirthSignUp.value,
      );
    } else if (errorName.textContent !== "") {
      errorName.textContent = "The name is incorrect";
      alert("The name is incorrect");
    } else if (errorLastName.textContent !== "") {
      textError.textContent = "The last name is incorrect";
      alert("The password is incorrect");
      alert("The last name is incorrect");
    } else if (errorDni.textContent !== "") {
      errorDni.textContent = "The DNI is incorrect";
      alert("The DNI is incorrect");
    } else if (errorPhone.textContent) {
      errorPhone.textContent = "The phone is incorrect";
      alert("The phone is incorrect");
    } else if (errorAdress.textContent) {
      errorAdress.textContent = "The adress is incorrect";
      alert("The adress is incorrect");
    } else if (errorLocation.textContent) {
      errorLocation.textContent = "The location is incorrect";
      alert("The location is incorrect");
    } else if (errorPostal.textContent) {
      errorPostal.textContent = "The postal code is incorrect";
      alert("The postal code is incorrect");
    } else if (errorEmailSignUp.textContent) {
      errorEmailSignUp.textContent = "The email is incorrect";
      alert("The email is incorrect");
    } else if (errorPassword.textContent) {
      errorPassword.textContent = "The password is incorrect";
      alert("The password is incorrect");
    } else if (errorPasswordRepeat.textContent) {
      errorPasswordRepeat.textContent = "The second password is incorrect";
      alert("The second password is incorrect");
    }
  }
});
