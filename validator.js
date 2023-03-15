const validator = { 

  
  isValid:(carddigits) => {


    let sum = 0;
    let isEven = false;
    
    if (carddigits === null || carddigits === ""){
      return false
    }
    console.log("carddigits = " +carddigits);
    console.log(typeof(carddigits));

    //console.log(creditCardNumberval);
    const digitsOnly = carddigits.replace(/\D/g, ''); // eliminar lo que no sea un dígito
    const trimmed = digitsOnly.replace(/\s+/g, ''); // eliminar espacios en blanco
    const reversed = trimmed.split('').reverse().join(''); // cardnumber al revés

    


    
    for (let i = 0; i < reversed.length; i++) {
      let digit = parseInt(reversed[i]);
      //console.log(digit);
      //console.log(sum);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      isEven = !isEven;
      sum += digit;
      //console.log(sum);
    }

    return sum % 10 === 0;

  },
  
  maskify:(n) => {
  
    const ccValue = n;
    let maskedDigits = ccValue;
  

    if (ccValue.length > 4){
    
      maskedDigits = ccValue.replace(/.(?=.{4})/g, "#");
      

    }
    
    return maskedDigits;
  
  }
  


}

 
  
 


export default validator;
