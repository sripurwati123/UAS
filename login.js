// login.js

window.addEventListener("load", (event) => {
  function userLogin(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    console.log("email: ", email);
    console.log("userPassword: ", userPassword);

    const data = localStorage.getItem(email);
    if (data !== null) {
      const { name, password } = JSON.parse(data);
      console.log("name, password: ", name, password);
      if (password === userPassword) {
        sessionStorage.setItem("userInformation", JSON.stringify({ name, email, password }));
        alert("Login successful! Welcome, " + name + "!");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        // window.location.href = "file:///home/martines205/Desktop/UAS%20bu%20sri/index.html";
      } else alert("user information is invalid or unregistered!");
    } else alert("user information is invalid or unregistered!");

    // Reset form fields
  }

  // Attach event listener to registration form
  var loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", userLogin);
});
