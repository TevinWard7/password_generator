// Assignment Code
var generateBtn = document.querySelector("#generate");
//Variables
var length;
var lowerCase;
var upperCase;
var numeric;
var specialCharacters;

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

function passwordSelection() {
	//Question 1
	length = prompt("How many characters? (enter number)");
	if (length > 8 && length < 128) {
		//Question 2
		lowerCase = confirm("Want lower case characters?");
		//Question 3
		upperCase = confirm("Want uppercase characters?");
		//Question 4
		numeric = confirm("Want numbers?");
		//Question 5
		specialCharacters = confirm("Want special characters?");
	}

	else {
		alert("Must enter number 8-128");
	}
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordSelection);
