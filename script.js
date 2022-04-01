function generatePassword(){
  //TODO: your code goes here
<<<<<<< HEAD
=======
  return "password"
>>>>>>> e3ffeda00fd023743152fb8618f6305546f34605
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
var userAnswer =("")

// the stuff the homework provided
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // getting the preferred length of the password and putting said input into the rest of the equation but this part wasn't allowed in the function???
  userAnswer = window.prompt("how long do you want the password to be?");
  return userAnswer

  function getUseranswer(){
  if (userAnswer <= 8|| userAnswer >128){
    window.alert ("password has to be a minimum of 8 characters or to the maximum of 128 characters.")
    return "error"
  }

  let;
  // window question to confirm if they want item and then randomizing said item for password contents
    if (window.confirm("do you want uppercase letters?") == true) {
    userChoice = userChoice + upperCase}     
    for (var i = 0; i < uppercaseValue; i++){
     upperCase = (Math.floor(Math.random()*upperCase.length));
}
    if (window.confirm("do you want lowercase letters?") == true) {
    userChoice = userChoice + lowerCase}
     for (var i = 0; i < lowercaseValue; i++){
      lowerCase = (Math.floor(Math.random()*lowerCase.length));
}
    if (window.confirm("do you want numbers?") == true){
    userChoice = userChoice + numbers}
    for (var i = 0; i < numberValue; i++){
      numbers = (Math.floor(Math.random()*numbers.length));
}
    if (window.confirm("do you want special characters?") == true) {
  userChoice = userChoice + specialCharacters}
      for (var i = 0; i < specialValue; i++){
      specialCharacters = (Math.floor(Math.random()*specialCharacters.length));
      }

      // but somehow make it as long as the userAnswer????
  (passwordText = specialValue + numberValue + lowerCase + uppercaseValue)  
}
return password



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
