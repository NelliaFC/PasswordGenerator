// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const resultElement = document.getElementById("result")
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// generator fuction

//function for lower case alphabet
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//funtion for Upper case alphabet
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//function for random Numbers
//function getRandomNumber(){
  //return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//}
function getRandomSymbol(){
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());
