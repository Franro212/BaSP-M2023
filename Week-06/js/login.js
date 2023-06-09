window.addEventListener("load", function () {
  var passwordLogin = document.getElementById("password");
  var textError = document.getElementById("messageError");
  var emailLogin = document.getElementById("email");
  var errorEmail = document.getElementById("errorEmail");
  var login = document.getElementById("login");
  var textErrorEmail = "*Enter a valid email address.";
  var textErrorLength = "*The password must be at least 8 characters.";
  var textErrorNumeric =
    "*The password must contain at least 2 numeric characters.";
  var textErrorSpecial =
    "*The password must contain at least 1 special character.";
  var textErrorUppercase =
    "*The password must contain at least 1 capital letter.";
  var textErrorLowercase =
    "*The password must contain at least 1 lowercase letter.";
  passwordLogin.addEventListener("blur", validatePassword);
  //PASSWORD
  function validatePassword() {
    var password = passwordLogin.value;
    // PASSWORD LENGTH
    if (password.length < 8) {
      textError.textContent = textErrorLength;
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
      textError.textContent = textErrorNumeric;
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
      textError.textContent = textErrorSpecial;
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
      textError.textContent = textErrorUppercase;
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
      textError.textContent = textErrorLowercase;
      return;
    }
  }
  passwordLogin.addEventListener("focus", function () {
    textError.textContent = "";
  });
  //VALIDATE EMAIL
  emailLogin.addEventListener("blur", validateEmail);

  function validateEmail() {
    var email = emailLogin.value.trim();
    var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      errorEmail.textContent = textErrorEmail;
      return;
    }
  }
  emailLogin.addEventListener("focus", function () {
    errorEmail.textContent = "";
  });
  //BUTTON SUBMIT
  login.addEventListener("submit", validateButtom);
  function validateButtom() {
    validatePassword();
    validateEmail();

    if (textError.textContent === "" && errorEmail.textContent === "") {
      alert(
        "The password is: " +
          passwordLogin.value +
          "\nThe email is: " +
          emailLogin.value,
      );
    } else if (errorEmail.textContent !== "") {
      errorEmail.textContent = textErrorEmail;
      alert(textErrorEmail);
    } else if (textError.textContent !== "") {
      textError.textContent = "The password is incorrect";
      alert("The password is incorrect");
    }
  }
});
