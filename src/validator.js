const validator = {

  // Get a reference to the submit button
var submitButton = document.getElementById("submitButton");

// Add an event listener for the click event
submitButton.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the credit card number from the input field
  var cardNumber = document.getElementById("cardNo").value;
  cardNumber = cardNumber.replace(/\D/g, '');

  // Perform the Luhn check
  var reversedCardNumber = cardNumber.split('').reverse().join('');

  var sum = 0;
  for (var i = 0; i < reversedCardNumber.length; i++) {
    var digit = parseInt(reversedCardNumber.charAt(i));

    if (i % 2 === 1) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  if (sum % 10 === 0) {
    alert("Valid credit card number!");
  } else {
    alert("Invalid credit card number!");
  }
});


};

export default validator;
