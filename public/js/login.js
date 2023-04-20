const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = document.querySelector("#name-login").value.trim();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    // fetching to a diff route than signup--might need to update
    if (name && email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // Redirecting login to the quiz game page--need to update route
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
  
