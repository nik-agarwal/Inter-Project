// var pword = document.getElementById("psw");
// const uname = document.getElementById("usrname");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// pword.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// pword.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// pword.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(pword.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(pword.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(pword.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   // Validate length
//   if(pword.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }

// // logged in page


// // function myfunc(){
// //  var uname=document.forms["myform"]["usrname"].value;
// //  var pword=document.forms["myform"]["psw"].value;
// //  if(uname.value=="student" && pword.value=="A1sdfghjkl"){
// //     window.location.href="welcome.html";
// // }
// // }
// submitBtn.addEventListener("click", () => {
//     if (uname.value == "") {
//       alert("please enter Username");
//     }
//     if (pword.value == "") {
//         alert("please enter password");
//     }
//     else{
        
//         let cred = {
//             uName: `${uname.value}`,
//             pword: `${pword.value}`
//         }
//         window.location.href="welcome.html";
//     }
//   });
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