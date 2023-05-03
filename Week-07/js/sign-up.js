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
  function validatePassword(passwordInput, error) {
    var password = passwordInput.value;
    if (password.length < 8) {
      error.textContent = "*The password must be at least 8 characters.";
      return;
    }
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
  function formatDate(date) {
    var d = new Date(date);
    var year = d.getFullYear();
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);
    return `${month}/${day}/${year}`;
  }

  nameSignUp.value = localStorage.getItem("name");
  lastNameSignUp.value = localStorage.getItem("lastname");
  dniSignUp.value = localStorage.getItem("dni");
  dateOfBirthSignUp.value = localStorage.getItem("dob");
  phoneNumberSignUp.value = localStorage.getItem("phone");
  adressSignUp.value = localStorage.getItem("adress");
  locationSignUp.value = localStorage.getItem("city");
  postalCodeSignUp.value = localStorage.getItem("zip");
  emailSignUp.value = localStorage.getItem("email");
  passwordSignUp.value = localStorage.getItem("password");
  repeatPasswordSignUp.value = localStorage.getItem("repeatPassword");

  function fetchSignUp() {
    var date = dateOfBirthSignUp.value;
    var formattedDated = formatDate(date);
    const url = `https://api-rest-server.vercel.app/signup?name=${nameSignUp.value}&lastName=${lastNameSignUp.value}&dni=${dni.value}&dob=${formattedDated}&phone=${phoneNumberSignUp.value}&address=${adressSignUp.value}&city=${locationSignUp.value}&zip=${postalCodeSignUp.value}&email=${emailSignUp.value}&password=${passwordSignUp.value}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          localStorage.setItem("name", nameSignUp.value);
          localStorage.setItem("lastname", lastNameSignUp.value);
          localStorage.setItem("dni", dniSignUp.value);
          localStorage.setItem("dob", dateOfBirthSignUp.value);
          localStorage.setItem("phone", phoneNumberSignUp.value);
          localStorage.setItem("adress", adressSignUp.value);
          localStorage.setItem("city", locationSignUp.value);
          localStorage.setItem("zip", postalCodeSignUp.value);
          localStorage.setItem("email", emailSignUp.value);
          localStorage.setItem("password", passwordSignUp.value);
          localStorage.setItem("repeatPassword", repeatPasswordSignUp.value);

          return response.json();
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data.success === true) {
          alert(
            data.success +
              "\n" +
              data.msg +
              "\nThe name is: " +
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
              "\nThe date of birth: " +
              formattedDated,
          );
        } else {
          throw new Error(data.errors[0].msg);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  formRegister.addEventListener("submit", validateForm);
  function validateForm(e) {
    e.preventDefault();
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
      fetchSignUp();
    }
  }
});
