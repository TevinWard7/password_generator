// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function passwordSelection() {

  //Variables
  var length = prompt("How many characters? (enter number)");
  var lowerCase;
  var upperCase;
  var numeric;
  var specialCharacters;


  //Conditions 
  if (length > 8 && length < 128) {
    lowerCase = prompt("Want lower case characters?")

    if (lowerCase === "yes" || lowerCase === "no") {
      upperCase = prompt("Want uppercase characters?")
    }

    else {
      alert("Must enter yes or no")
    }
  }

  else {
    alert("Must enter number 8-128")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordSelection);