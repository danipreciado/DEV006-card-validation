const validator = { 

  
  isValid:(carddigits) => {


    let sum = 0;
    let isEven = false;
    
    if (carddigits === 0 || carddigits === "" || carddigits === null){
      return false
    }
    
    const digitsOnly = carddigits.replace(/\D/g, ''); // eliminar lo que no sea un dígito
    //console.log("this is digis only"+ digitsOnly);
    const trimmed = digitsOnly.replace(/\s+/g, ''); // eliminar espacios en blanco
    const reversed = trimmed.split('').reverse().join(''); // carddigits al revés

    
    for (let i = 0; i < reversed.length; i++) {
      let digit = parseInt(reversed[i]);
      
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      isEven = !isEven;
      sum += digit;
      
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
