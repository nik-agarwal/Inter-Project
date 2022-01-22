const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const submitBtn = document.querySelector(".login-btn");
 var letter = document.getElementById("letter");
 var capital = document.getElementById("capital");
 var number = document.getElementById("number");
 var length = document.getElementById("length");

username.addEventListener("keyup", () => {
  if (username.value == "") {
    usernameError.style.display = "block";
  } else {
    usernameError.style.display = "none";
  }
//   pword.onkeyup = function() {
      // Validate lowercase letters
    //   var lowerCaseLetters = /[a-z]/g;
    //   if(password.value.match(lowerCaseLetters)) {
    //     letter.classList.remove("invalid");
    //     letter.classList.add("valid");
    //   } else {
    //     letter.classList.remove("valid");
    //     letter.classList.add("invalid");
    // }
    
    //   // Validate capital letters
    //   var upperCaseLetters = /[A-Z]/g;
    //   if(password.value.match(upperCaseLetters)) {
    //     capital.classList.remove("invalid");
    //     capital.classList.add("valid");
    //   } else {
    //     capital.classList.remove("valid");
    //     capital.classList.add("invalid");
    //   }
    
    //   // Validate numbers
    //   var numbers = /[0-9]/g;
    //   if(password.value.match(numbers)) {
    //     number.classList.remove("invalid");
    //     number.classList.add("valid");
    //   } else {
    //     number.classList.remove("valid");
    //     number.classList.add("invalid");
    //   }
    
    //   // Validate length
    //   if(password.value.length >= 8) {
    //     length.classList.remove("invalid");
    //     length.classList.add("valid");
    //   } else {
    //     length.classList.remove("valid");
    //     length.classList.add("invalid");
    //   }
    // }
});

password.addEventListener("keyup", () => {
    if (password.value == "") {
        passwordError.style.display = "block";
      } else {
        passwordError.style.display = "none";
      }
       // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(password.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  
});

submitBtn.addEventListener("click", () => {
  if (username.value == "") {
    usernameError.style.display = "block";
  }
  if (password.value == "") {
    passwordError.style.display = "block";
  }
  else{
      usernameError.style.display = 'none';
      passwordError.style.display = "none";
      let cred = {
          userName: `${username.value}`,
          password: `${password.value}`
      }
      window.location.href="welcome.html";
  }
});
