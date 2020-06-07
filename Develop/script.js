// Assignment code here
var lowercase = function() {
  
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var uppercase = function() {
  
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
var number = function() {
  
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
var symbols = function() {
  var symbols = "~!@#$%^&*()-_=+/><;:]}[{}]"
  return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword() {
  //assigning empty strings
  var passwordCharacters = "";
  var passString1 = "";
  var passwordLength = "";
  var passwordLow = "";
  var passwordUp = "";
  var passwordSym = "";
  var passwordNum = "";

// Prompt for password length
  var length = window.prompt("How long would you like your password to be? Must be between 8 and 128 characters.");
 
 //return if not within specified character range
  if(length < 8) {
    window.alert("Password length must be more than 8 characters.");
    var length = window.prompt("How long would you like your password to be? Must be between 8 and 128 characters.");
    
  }

  if(length > 128) {
    window.alert("Password length must be less than 128 characters.");
    var length = window.prompt("How long would you like your password to be? Must be between 8 and 128 characters.");
     
  };


 

//Prompts for what characters to include
  var lowerConfirm = window.confirm("Do you want to include lowercase letters?");
  if (lowerConfirm) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
    passwordLow += 1;
    //making sure atleast one of each selected gets included in password
    passString1 += lowercase();
  }
  

  else {
    passwordLow += 0;
  };
    
  
  
  

  var upperConfirm = window.confirm("Do you want to include uppercase letters?");
  if (upperConfirm) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordUp += 1;
    //making sure atleast one of each selected gets included in password
    passString1 += uppercase();
  }
  else {
    passwordUp += 0;
  };



  var numberConfirm = window.confirm("Do you want to include numbers?");
  if (numberConfirm) {
    passwordCharacters += "0123456789";
    passwordNum += 1;
    //making sure atleast one of each selected gets included in password
    passString1 += number();
  }
  else {
    passwordNum += 0;
  };

  var symbolConfirm = window.confirm("Do you want to include symbols?");
  if (symbolConfirm) {
    passwordCharacters += "~!@#$%^&*()-_=+/><;:]}[{}]";
    passwordSym += 1;
    //making sure atleast one of each selected gets included in password
    passString1 += symbols();
  }
  else {
    passwordSym += 0;
  };
   

  var passwordLength = parseInt(passwordNum) + parseInt(passwordLow) + parseInt(passwordUp) + parseInt(passwordSym);

  
  
  var passString2 = "";
  // Randomizing selection from all included characters.
  for (let i = 0; i < length - passwordLength; i++) {
    passString2 += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
  };

  // Adding together one of each chosen character with a random selection from selected characters for the remaining length of password
  return passString1 + passString2;
}




// Get references to` the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

