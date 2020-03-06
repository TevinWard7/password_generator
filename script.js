// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;

  //my code
  var passwordLength = prompt("How long do you want your password? (Must choose 8-12 characters")

  //conditions
  if (passwordLength > 8 || passwordLength < 128) {
    var passwordCase = prompt("W")
  }

  else {
    alert("Must choose 8-12 characters")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




