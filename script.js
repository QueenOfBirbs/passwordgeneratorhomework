function generatePassword() {
  //TODO: your code goes here
  return "password"
}

// TO DO LIST
// create a rando password with letters, numbers, upper/lowercase and special characters
// when button is clicked it should ask prompts for password preferences
// prompts should be how many characters long, if they want uppercase, if they want lowercase, if the want numbers and if they want special characters
// all the answers should be held in the page so it can combine together and create a password
// the password should be shown in the specific box


// my variables
var lowerCase = ("abcdefghijklmnopqrstuvwxyz")
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numbers = ("0123456789")
var specialCharacters = ("!@#$%^&*_-+=")
var userChoice = ("")
var userAnswer = ("")

// the stuff the homework provided
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = getUseranswer();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getUseranswer() {
  // getting the preferred length of the password from user
  userAnswer = window.prompt("how long do you want the password to be?");
  var passwordText = ""

  if (userAnswer <= 8 || userAnswer > 128) {
    window.alert("password has to be a minimum of 8 characters or to the maximum of 128 characters.")
    return "error"
  }

  // window question to confirm if they want in their password
  if (window.confirm("do you want uppercase letters?") == true) {
    userChoice = userChoice + upperCase
  }
  
  if (window.confirm("do you want lowercase letters?") == true) {
    userChoice = userChoice + lowerCase
  }

  if (window.confirm("do you want numbers?") == true) {
    userChoice = userChoice + numbers
  }
 
  if (window.confirm("do you want special characters?") == true) {
    userChoice = userChoice + specialCharacters
  }
  
  // add everything together that the user chose, make the desired length and randomize it
  for (var i = 0; i < userAnswer; i++) {
    var index = (Math.floor(Math.random() * userChoice.length));
    passwordText += userChoice[index]
  }

  return passwordText
}



// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
