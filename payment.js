// payment.js

// Function to handle payment form submission
var registrationPage = document.getElementById("registrationPage");
if (registrationPage !== null) {
  const data = sessionStorage.getItem("userInformation");
  if (data !== null) {
    registrationPage.remove();

    // location.reload();
  } else {
    document.getElementById("logout").remove();
    document.getElementById("bookingPage").remove();
    document.getElementById("paymentPage").remove();
  }
  console.log("page is fully loaded");
}

function processPayment(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var cardNumber = document.getElementById("cardnumber").value;
  var expiryDate = document.getElementById("expiry").value;
  var cvv = document.getElementById("cvv").value;
  var BookingId = document.getElementById("BookingId").value;

  // Perform payment process (e.g., send data to payment gateway, validate, etc.)

  const bookingInformation = sessionStorage.getItem(BookingId);
  if (bookingInformation === null) {
    alert("Booking ID is invalid!!!");
    return;
  }

  // Display success message
  alert("Payment successful! Thank you for your payment.");
  sessionStorage.removeItem(BookingId);
  // Reset form fields
  document.getElementById("BookingId").value = "";
  document.getElementById("cardnumber").value = "";
  document.getElementById("expiry").value = "";
  document.getElementById("cvv").value = "";
}

// Attach event listener to payment form
var paymentForm = document.getElementById("payment-form");
paymentForm.addEventListener("submit", processPayment);

var userLogout = document.getElementById("logout");
userLogout.addEventListener("click", () => {
  console.log("tes");
  sessionStorage.clear();
});
