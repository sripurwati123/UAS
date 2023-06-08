// registration.js

window.addEventListener("load", (event) => {
  var userLogout = document.getElementById("logout");
  userLogout.addEventListener("click", () => {
    console.log("tes");
    sessionStorage.clear();
  });

  var registrationPage = document.getElementById("registrationPage");
  if (registrationPage !== null) {
    const data = sessionStorage.getItem("userInformation");
    if (data !== null) {
      registrationPage.remove();
      document.getElementById("login").remove();
    } else {
      document.getElementById("logout").remove();
      document.getElementById("bookingPage").remove();
      document.getElementById("paymentPage").remove();
    }
    console.log("page is fully loaded");
  }

  // Function to handle registration form submission
  function registerUser(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    sessionStorage.setItem("userInformation", JSON.stringify({ name, email, password }));
    localStorage.setItem(email, JSON.stringify({ name, password }));
    // Perform registration process (e.g., send data to server, validate, etc.)
    // ...
    console.log("email: ", email);
    console.log("password: ", password);
    // Display success message
    alert("Registration successful! Welcome, " + name + "!");

    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    location.reload();
    // window.location.href = "file:///home/martines205/Desktop/UAS%20bu%20sri/index.html";
  }

  // Attach event listener to registration form
  var registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("submit", registerUser);
});
