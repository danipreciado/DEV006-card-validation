import validator from './validator.js';

const validateBtn = document.getElementById ("validateBtn");
const creditCardNumber = document.getElementById("creditCardNumber");

validateBtn.addEventListener("click", () => {

  const isValid = validator.isValid(creditCardNumber.value);

  if (isValid) {
    console.log("Válida"); //aquí debe de ir un mensaje que diga que la tarjeta es válida

  } else {
    console.log("Inválida"); //aquí debe de ir un mensaje que diga que la tarjeta es inválida

  }


});

creditCardNumber.addEventListener("input", () => {
  const ccNumber = creditCardNumber.value;

  
  const maskedNumber = validator.maskify(ccNumber);
  //console.log(maskedNumber); 

  //creditCardNumber.value=maskedNumber; //también quiero que se separe el número en grupos de 4 dígitos



})


