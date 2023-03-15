import validator from './validator.js';

const validateBtn = document.getElementById ("validateBtn");
const creditCardNumber = document.getElementById("creditCardNumber");
const cardNoElement = document.getElementById("cardno");
const validationMsg = document.getElementById("validationMsg");
let maskedNumber = "";
let unaltered = null;

validateBtn.addEventListener("click", () => {
  
  const isValid = validator.isValid(unaltered);
  

  if (isValid) {
    console.log("Válida"); //aquí debe de ir un mensaje que diga que la tarjeta es válida
    validationMsg.textContent = "Valid credit card";

  } else {
    console.log("Inválida"); //aquí debe de ir un mensaje que diga que la tarjeta es inválida
    validationMsg.textContent = "Please enter a valid credit card";

  }
  unaltered = "";

});

creditCardNumber.addEventListener("input", () => {
  const ccNumber = creditCardNumber.value;
  unaltered = ccNumber;
  maskedNumber = validator.maskify(ccNumber);
  
  //console.log(maskedNumber); 

  creditCardNumber.value=maskedNumber; 
  //console.log(creditCardNumber.value);

  
  //dynamically updating masked digits in card, groups digits in 4 
  cardNoElement.innerText = maskedNumber.match(/.{1,4}/g).join(' ');

})


