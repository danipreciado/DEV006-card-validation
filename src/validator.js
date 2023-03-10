const validator = { 

  isValid:function(n){

     // luhn.js module
 {
  let sum = 0;
  let isEven = false;
  
  // Remove any non-digit characters from the card number
  
  const digitsOnly = n.replace(/\D/g, ''); // remove non-digits
  const trimmed = digitsOnly.replace(/\s+/g, ''); // remove whitespace
  const reversed = trimmed.split('').reverse().join(''); // reverse the digits
// perform Luhn algorithm computations on the reversed digits
  
  
  
  // Loop through each digit of the reversed card number
  for (let i = 0; i < reversedCardNumber.length; i++) {
    let digit = parseInt(reversedCardNumber[i]);
    
    if (isEven) {
      digit *= 2;
      
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}



  }

 
};

export default validator;
