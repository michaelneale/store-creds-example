// loginForm.js
export function initLoginForm(onLogin, onCreateNewId) {
    const loginContainer = document.getElementById("loginContainer");
  
    // Create form
    const loginForm = document.createElement("form");
    loginForm.id = "loginForm";
    loginForm.autocomplete = "on";
    loginContainer.appendChild(loginForm);
  
    // Create username input
    const usernameLabel = document.createElement("label");
    usernameLabel.htmlFor = "username";
    usernameLabel.textContent = "Username:";
    loginForm.appendChild(usernameLabel);
  
    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.id = "username";
    usernameInput.name = "username";
    usernameInput.autocomplete = "username";
    usernameInput.required = true;
    loginForm.appendChild(usernameInput);
  
    // Create password input
    const passwordLabel = document.createElement("label");
    passwordLabel.htmlFor = "password";
    passwordLabel.textContent = "Password:";
    loginForm.appendChild(passwordLabel);
  
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.autocomplete = "current-password";
    passwordInput.required = true;
    loginForm.appendChild(passwordInput);
  
    // Create buttons
    const loginButton = document.createElement("button");
    loginButton.type = "submit";
    loginButton.textContent = "Login";
    loginForm.appendChild(loginButton);
  
    const createNewIdButton = document.createElement("button");
    createNewIdButton.type = "button";
    createNewIdButton.id = "createNewId";
    createNewIdButton.textContent = "Create New ID";
    loginForm.appendChild(createNewIdButton);
  
    // Event handlers
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      onLogin(loginForm);
    });
  
    createNewIdButton.addEventListener("click", () => {
      const credentials = onCreateNewId();
      usernameInput.value = credentials.username;
      passwordInput.value = credentials.password;
    });
  }
  