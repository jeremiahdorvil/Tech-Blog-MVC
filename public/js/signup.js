const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    // fetching to a different route than the login--might need to update route
    if (email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ email, password }),
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
  