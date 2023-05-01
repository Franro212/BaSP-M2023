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
  var textErrorUppercase =
    "*The password must contain at least 1 capital letter.";
  var textErrorLowercase =
    "*The password must contain at least 1 lowercase letter.";
  passwordLogin.addEventListener("blur", validatePassword);

  function validatePassword() {
    var password = passwordLogin.value;

    if (password.length < 8) {
      textError.textContent = textErrorLength;
      return;
    }

    var number = 0;
    for (i = 0; i < password.length; i++) {
      var charCode = password.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        number++;
      }
    }
    if (number < 1) {
      textError.textContent = textErrorNumeric;
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
      textError.textContent = textErrorUppercase;
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
      textError.textContent = textErrorLowercase;
      return;
    }
  }
  passwordLogin.addEventListener("focus", function () {
    textError.textContent = "";
  });
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
  login.addEventListener("submit", validateButtom);
  function fetchFunction() {
    const url = `https://api-rest-server.vercel.app/login?email=${emailLogin.value}&password=${passwordLogin.value}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          alert(data.success + "\n" + data.msg);
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        alert(error.msg);
      });
  }
  function validateButtom(e) {
    e.preventDefault();

    validatePassword();
    validateEmail();

    if (textError.textContent === "" && errorEmail.textContent === "") {
      fetchFunction();
    }
  }
});
