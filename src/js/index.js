// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


// index.js

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const rangeInput = document.getElementById("range");
    const lengthText = document.getElementById("length-text");
    const generateButton = document.getElementById("generate-password");
  
    const generatePassword = (length) => {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    };
  
    rangeInput.addEventListener("input", (event) => {
      const length = event.target.value;
      lengthText.textContent = length;
    });
  
    generateButton.addEventListener("click", () => {
      const length = rangeInput.value;
      const newPassword = generatePassword(length);
      passwordInput.value = newPassword;
    });
  
    
    passwordInput.value = generatePassword(rangeInput.value);
  });
  