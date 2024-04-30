// Function to handle owner registration form submission
function registerOwner() {
    // Get form input values
    var ownerName = document.getElementById("owner_name").value;
    var ownerEmail = document.getElementById("owner_email").value;
    var ownerPassword = document.getElementById("owner_password").value;
  
    // Perform form validation (you can add more validation as needed)
    if (ownerName === "" || ownerEmail === "" || ownerPassword === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // Assuming here that owner registration is successful and redirect to login page
    window.location.href = "owner_login.html";
    return false;
  }
  
  // Function to handle owner login form submission
  function ownerLogin() {
    // Get form input values
    var ownerEmail = document.getElementById("login_owner_email").value;
    var ownerPassword = document.getElementById("login_owner_password").value;
  
    // Perform form validation (you can add more validation as needed)
    if (ownerEmail === "" || ownerPassword === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // Assuming here that owner login is successful and redirect to home page
    window.location.href = "home.html";
    return false;
  }
  