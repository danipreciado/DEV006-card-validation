import validator from './validator.js';

const cardNo = document.getElementById("cardNo"); 
const validateBtn = document.getElementById("validateBtn");

validateBtn.addEventListener("click",function(){
    const isValid = validator.isValid (cardNo.value)
    let validation = document.getElementById("validation");

    if(isValid){
        validation.textContent = "Es válida"
    } 
    else {
        validation.textContent = "No es válida"

    }


}




)

console.log(validator);

