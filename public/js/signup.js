const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    // fetching to a different route than the login--might need to update route
    if (name && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      // Redirecting sign up to the home page
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
  