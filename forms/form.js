
const username = document.getElementById("name");
const password = document.getElementById("pwd");
const cpassword = document.getElementById("cpwd");
const pmail = document.getElementById("email");
const form = document.querySelector("form");

let isValiduname = false;
let isValidpass = false;
let isValidcpass = false;
let isValidemail = false;

// Add event listeners to input fields for real-time validation
username.addEventListener("input", validateUsername);
password.addEventListener("input", validatePassword);
cpassword.addEventListener("input", validateCPassword);
pmail.addEventListener("input", validateEmail);

// Form submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    Validate();
    if(isValiduname && isValidcpass && isValidpass && isValidemail){
      window.location.href = "submit.html";
 }
});

// Validate all fields on form submit
function Validate() {
    validateUsername();
    validatePassword();
    validateCPassword();
    validateEmail();
}

function validateUsername() {
    const uname = username.value.trim();
    if (uname === "") {
        setError(username, "Username should not be empty");
    } else if (uname.length < 8) {
        setError(username, "Username should be greater than 8 characters");
    } else {
        setSuccess(username);
        isValiduname = true;
    }
}

function validatePassword() {
    const pass = password.value.trim();
    if (pass === "") {
        setError(password, "Password should not be empty");
    } else if (!pscheck(pass)) {
        setError(password, "Password should contain at least one capital letter, one special character, and one digit");
    } else {
        setSuccess(password);
        isValidpass = true;
    }
}

function validateCPassword() {
    const pass = password.value.trim();
    const cpass = cpassword.value.trim();
    if (cpass === "") {
        setError(cpassword, "Confirm password should not be empty");
    } else if (cpass !== pass) {
        setError(cpassword, "Passwords do not match");
    } else {
        setSuccess(cpassword);
        isValidcpass = true;
    }
}

function validateEmail() {
    const mail = pmail.value.trim();
    if (mail === "") {
        setError(pmail, "Email should not be empty");
    } else if (!emailCheck(mail)) {
        setError(pmail, "Email should be valid");
    } else {
        setSuccess(pmail);
        isValidemail = true;
    }
}

// Error handling
function setError(input, message) {
    const parent = input.parentElement;
    const small = parent.querySelector(".small");
    small.innerText = message;
    small.style.display = "block";
    small.style.color = "red";
    small.style.marginLeft = "10px";
    input.style.borderColor = "red"; // Change border color on error
}

// Success handling
function setSuccess(input) {
    const parent = input.parentElement;
    const small = parent.querySelector(".small");
    small.innerText = "";
    small.style.display = "none";
    input.style.borderColor = "green"; // Change border color on success
    input.style.borderWidth = "2px";
}

// Password validation
function pscheck(input) {
    const reg = /(?=.*[A-Z])(?=.*\d)(?=.*[@$&*])[A-Za-z\d@$&*]{6,}/;
    return reg.test(input);
}

// Email validation
function emailCheck(input) {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(input);
}
