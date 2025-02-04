// Get all navigation links
const homeLink = document.getElementById("home");
const progressLink = document.getElementById("progress");
const creditsLink = document.getElementById("credits");
const signupLoginLink = document.getElementById("signup-login");

// Get the content elements
const pageTitle = document.getElementById("page-title");
const pageDescription = document.getElementById("page-description");

// Add event listeners to the links
homeLink.addEventListener("click", () => {
  pageTitle.textContent = "Welcome to the Home Page";
  pageDescription.textContent = "This is the home page. Explore the website using the navigation bar.";
});

progressLink.addEventListener("click", () => {
  pageTitle.textContent = "Progress";
  pageDescription.textContent = "Here you can track your progress. Stay motivated!";
});

creditsLink.addEventListener("click", () => {
  pageTitle.textContent = "Credits";
  pageDescription.textContent = "This website was created with ❤️ by [Your Name].";
});

signupLoginLink.addEventListener("click", () => {
  pageTitle.textContent = "Signup/Login";
  pageDescription.textContent = "Create an account or log in to access more features.";
});
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login');
  const signupForm = document.getElementById('signup');
  const showSignupLink = document.getElementById('showSignup');
  const showLoginLink = document.getElementById('showLogin');
  const loginFormContainer = document.getElementById('loginForm');
  const signupFormContainer = document.getElementById('signupForm');
  const messageElement = document.getElementById('message');

  // Toggle between Login and Signup forms
  showSignupLink.addEventListener('click', function (e) {
      e.preventDefault();
      loginFormContainer.style.display = 'none';
      signupFormContainer.style.display = 'block';
      messageElement.textContent = '';
  });

  showLoginLink.addEventListener('click', function (e) {
      e.preventDefault();
      signupFormContainer.style.display = 'none';
      loginFormContainer.style.display = 'block';
      messageElement.textContent = '';
  });

  // Signup functionality
  signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;

      // Save user data to localStorage
      const user = { name, email, password };
      localStorage.setItem(email, JSON.stringify(user));

      messageElement.textContent = 'Signup successful! Please login.';
      messageElement.style.color = 'green';
      signupFormContainer.style.display = 'none';
      loginFormContainer.style.display = 'block';
  });

  // Login functionality
  loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      // Retrieve user data from localStorage
      const user = JSON.parse(localStorage.getItem(email));

      if (user && user.password === password) {
          messageElement.textContent = `Welcome back, ${user.name}!`;
          messageElement.style.color = 'green';
      } else {
          messageElement.textContent = 'Invalid email or password.';
          messageElement.style.color = 'red';
      }
  });
});