import validator from './validator.js';

const validateBtn = document.getElementById ("validateBtn");
const creditCardNumber = document.getElementById("creditCardNumber");
const cardNoElement = document.getElementById("cardno");
const fullname = document.getElementById("fullName");
const cardnameElement = document.getElementById("cardname");
const validationMsg = document.getElementById("validationMsg");
let maskedNumber = "";
let unaltered = "";
let creditCardNumberval = creditCardNumber.value;
const cclength = creditCardNumberval.length;

creditCardNumber.addEventListener("input", () => {
  const inputValue = creditCardNumber.value;
  const numericValue = inputValue.replace(/[^0-9]/g, '');
  
  if (inputValue !== numericValue) {
    // Let the user know only numeric char allowed
    validationMsg.textContent = "Please enter only numeric characters";
  } else {
    // If only numbers are entered, proceed with maskify
    unaltered = numericValue;
    const ccNumber = unaltered;

    //creditCardNumber.value= maskedNumber; 
    //console.log(creditCardNumber.value);

    maskedNumber = validator.maskify(ccNumber);
    cardNoElement.innerText = maskedNumber.match(/.{1,4}/g).join(' ');
    validationMsg.textContent = "";
  }
});


fullname.addEventListener("input", () => {
  //dynamically update user's name in card
  cardnameElement.innerText = fullname.value;
});


validateBtn.addEventListener("click", () => {
  
  const isValid = validator.isValid(unaltered);
  if (fullname.value !== "" || cclength > 0 ){
    if (isValid) {
      //console.log("Válida"); aquí debe de ir un mensaje que diga que la tarjeta es válida
      validationMsg.textContent = "Valid credit card";

    } else {
      //console.log("Inválida"); aquí debe de ir un mensaje que diga que la tarjeta es inválida
      validationMsg.textContent = "Please enter a valid credit card";

    }

  } else {
    validationMsg.textContent = "Please enter all the card details."
  }

  unaltered = "";
  creditCardNumberval = "";
  //console.log("this is ccNumberval:" + creditCardNumberval);


})





