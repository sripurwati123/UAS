// booking.js

var userLogout = document.getElementById("logout");
userLogout.addEventListener("click", () => {
  console.log("tes");
  sessionStorage.clear();
});

const data = sessionStorage.getItem("userInformation");
if (data !== null) {
  const loginButton = document.getElementById("login");
  if (loginButton !== null) loginButton.remove();
} else {
  document.getElementById("logout").remove();
  document.getElementById("bookingPage").remove();
  document.getElementById("paymentPage").remove();
}
console.log("page is fully loaded");

// Function to handle booking form submission
function bookRoom(event) {
  event.preventDefault(); // Prevent form submission
  var roomType = document.getElementById("roomType").value;
  var checkInDate = document.getElementById("checkIn").value;
  var checkoutDate = document.getElementById("checkout").value;
  console.log();
  if (Date.parse(checkInDate) > Date.parse(checkoutDate)) {
    alert("checkIn and checkout is invalid!");
    return;
  }
  var roomNumber = Math.floor(Math.random() * 200);
  var bookId = (Math.random() + 1).toString(36).substring(2);
  alert("Booking successful! Your room is booked from " + checkInDate + " to " + checkoutDate + " with room number: " + roomNumber + "., please finish payment the under 15 minutes !");
  alert("IMPORTANT: BookID: " + bookId + ". please, Remember or Copy this id for payment!!");
  sessionStorage.setItem(bookId, JSON.stringify({ roomType, checkInDate, checkoutDate, BookTime: Date.now() }));
  // Reset form fields
  document.getElementById("checkin").value = "";
  document.getElementById("checkout").value = "";
  // window.location.href = "file:///home/martines205/Desktop/UAS%20bu%20sri/payment.html";
}

// Attach event listener to booking form
var bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit", bookRoom);
