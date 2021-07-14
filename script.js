// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = userPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Create Character pool with different character arrays
//create function to prompt user on what king of characters they want and how long they want the password >8<128
//Create helper function to randomize characters
//create "generate password" funtion that returns random password based on users choice

var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
                   
function shuffle (array){
  //grabs a randome index from selected array
var chooseRandomIndex = (Math.floor(Math.random * array.length)) 
//gives actual value of random index seleected above
var indexValue = array[chooseRandomIndex] 
return indexValue;
}




function userPrompt (){
  var passwordLimit = prompt ("How long would you like your password to be?")
if ( passwordLimit < 8 || passwordLimit > 128 ) 

{alert ("Password need to be greater than 8 and less than 128 characters")  
return 
}
var confirmNumbers = confirm("Would you like to have numbers in your password?")

var confirmCharacters = confirm("Would you like to use special Characters?")
var confirmLower = confirm("would you like to use lower case letters?")
var confirmUpper = confirm("would you like to use Upper case letters?")


var userChoice = {
numeric: confirmNumbers,
special: confirmCharacters,
lower: confirmLower,
upper: confirmUpper,

length: passwordLimit
}
console.log(userChoice)
return userChoice




}



function shuffle (){

}

